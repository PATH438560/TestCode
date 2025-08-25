using Microsoft.AspNetCore.Http;
using System.Collections.Concurrent;
using System.Threading.Tasks;

namespace QRCodeGenerator.API.Middleware
{
    public class RateLimitingMiddleware
    {
        private readonly RequestDelegate _next;
        private static readonly ConcurrentDictionary<string, RateLimitInfo> _clients = new ConcurrentDictionary<string, RateLimitInfo>();
        private const int MAX_REQUESTS_PER_MINUTE = 60;

        public RateLimitingMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var clientIp = context.Connection.RemoteIpAddress.ToString();
            var currentTime = DateTime.UtcNow;

            var rateLimitInfo = _clients.GetOrAdd(clientIp, new RateLimitInfo());

            lock (rateLimitInfo)
            {
                if (currentTime - rateLimitInfo.Timestamp > TimeSpan.FromMinutes(1))
                {
                    rateLimitInfo.RequestCount = 0;
                    rateLimitInfo.Timestamp = currentTime;
                }

                rateLimitInfo.RequestCount++;

                if (rateLimitInfo.RequestCount > MAX_REQUESTS_PER_MINUTE)
                {
                    context.Response.StatusCode = StatusCodes.Status429TooManyRequests;
                    await context.Response.WriteAsync("Too many requests. Please try again later.");
                    return;
                }
            }

            await _next(context);
        }

        private class RateLimitInfo
        {
            public int RequestCount { get; set; }
            public DateTime Timestamp { get; set; } = DateTime.UtcNow;
        }
    }
}