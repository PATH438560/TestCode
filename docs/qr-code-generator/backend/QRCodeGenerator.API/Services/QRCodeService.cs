using System;
using System.Drawing;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using QRCoder;
using QRCodeGenerator.API.Models;
using QRCodeGenerator.API.Services.Interfaces;

namespace QRCodeGenerator.API.Services
{
    public class QRCodeService : IQRCodeService
    {
        private readonly ILogger<QRCodeService> _logger;

        public QRCodeService(ILogger<QRCodeService> logger)
        {
            _logger = logger;
        }

        public async Task<QRCodeResponse> GenerateQRCodeAsync(QRCodeRequest request)
        {
            try
            {
                // Validate URL
                if (string.IsNullOrWhiteSpace(request.Url) || !Uri.IsWellFormedUriString(request.Url, UriKind.Absolute))
                {
                    return new QRCodeResponse
                    {
                        Success = false,
                        QRCodeImage = null,
                        Format = null,
                        ErrorDetails = new List<string> { "Invalid URL format" }
                    };
                }

                // Generate QR code
                using (var qrGenerator = new QRCoder.QRCodeGenerator())
                {
                    var qrCodeData = qrGenerator.CreateQrCode(request.Url, QRCoder.QRCodeGenerator.ECCLevel.Q);
                    using (var qrCode = new QRCoder.PngByteQRCode(qrCodeData))
                    {
                        byte[] qrCodeImage = await Task.Run(() => qrCode.GetGraphic(20));
                        string base64Image = Convert.ToBase64String(qrCodeImage);

                        return new QRCodeResponse
                        {
                            Success = true,
                            QRCodeImage = $"data:image/png;base64,{base64Image}",
                            Format = "png"
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error generating QR code");
                return new QRCodeResponse
                {
                    Success = false,
                    QRCodeImage = null,
                    Format = null,
                    ErrorDetails = new List<string> { ex.Message }
                };
            }
        }
    }
}