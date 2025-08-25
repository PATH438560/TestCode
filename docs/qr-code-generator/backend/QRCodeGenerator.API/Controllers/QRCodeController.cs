using Microsoft.AspNetCore.Mvc;
using QRCodeGenerator.API.Models;
using QRCodeGenerator.API.Services.Interfaces;
using System.Threading.Tasks;

namespace QRCodeGenerator.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QRCodeController : ControllerBase
    {
        private readonly IQRCodeService _qrCodeService;

        public QRCodeController(IQRCodeService qrCodeService)
        {
            _qrCodeService = qrCodeService;
        }

        [HttpPost("generate")]
        public async Task<IActionResult> GenerateQRCodeAsync([FromBody] QRCodeRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.Url))
            {
                return BadRequest(new ErrorResponse
                {
                    StatusCode = 400,
                    Message = "Invalid request",
                    Details = new[] { "URL is required." }
                });
            }

            var response = await _qrCodeService.GenerateQRCodeAsync(request);
            if (response.Success)
            {
                return Ok(response);
            }

            return BadRequest(new ErrorResponse
            {
                StatusCode = 400,
                Message = "Error generating QR code",
                Details = response.ErrorDetails
            });
        }

        [HttpGet("health")]
        public IActionResult GetHealth()
        {
            return Ok(new { status = "ok" });
        }
    }
}