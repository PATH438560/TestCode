using FluentValidation;
using QRCodeGenerator.API.Models;

namespace QRCodeGenerator.API.Validators
{
    public class QRCodeRequestValidator : AbstractValidator<QRCodeRequest>
    {
        public QRCodeRequestValidator()
        {
            RuleFor(request => request.Url)
                .NotEmpty().WithMessage("URL is required.")
                .Must(BeAValidUrl).WithMessage("Invalid URL format.");

            RuleFor(request => request.Options)
                .NotNull().WithMessage("Options are required.");
        }

        private bool BeAValidUrl(string url)
        {
            return Uri.TryCreate(url, UriKind.Absolute, out var uriResult) 
                   && (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps);
        }
    }
}