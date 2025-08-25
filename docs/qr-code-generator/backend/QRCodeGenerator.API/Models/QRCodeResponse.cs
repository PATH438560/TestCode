namespace QRCodeGenerator.API.Models
{
    public class QRCodeResponse
    {
        public bool Success { get; set; }
        public string? QRCodeImage { get; set; }
        public string? Format { get; set; }
        public List<string>? ErrorDetails { get; set; }
    }
}