using QRCodeGenerator.API.Models;

namespace QRCodeGenerator.API.Services.Interfaces
{
    public interface IQRCodeService
    {
        Task<QRCodeResponse> GenerateQRCodeAsync(QRCodeRequest request);
    }
}