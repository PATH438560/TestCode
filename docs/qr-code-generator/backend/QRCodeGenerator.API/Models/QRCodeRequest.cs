namespace QRCodeGenerator.API.Models
{
    public class QRCodeRequest
    {
        public string Url { get; set; }
        public QRCodeOptions Options { get; set; }
    }

    public class QRCodeOptions
    {
        public int PixelsPerModule { get; set; } = 20;
        public int QuietZoneSize { get; set; } = 4;
        public string DarkColor { get; set; } = "#000000";
        public string LightColor { get; set; } = "#ffffff";
        public bool DrawQuietZones { get; set; } = true;
    }
}