# README.md

# QR Code Generator Application

## Overview

The QR Code Generator is a client-server web application that allows users to generate QR codes from URLs. This project consists of a backend API built with .NET 9 and a frontend application developed using React with Vite.

## Project Structure

```
qr-code-generator
├── backend
│   ├── QRCodeGenerator.API
│   ├── QRCodeGenerator.sln
├── frontend
│   ├── client
├── docs
│   └── mvp-spec.md
└── README.md
```

## Backend

The backend is a .NET 9 Web API that handles QR code generation requests. It includes the following components:

- **Controllers**: Contains the `QRCodeController` which manages API requests.
- **Models**: Defines the data structures used in the application, including `QRCodeRequest`, `QRCodeResponse`, and `ErrorResponse`.
- **Services**: Implements the logic for generating QR codes and validating requests.
- **Validators**: Validates incoming requests using FluentValidation.
- **Middleware**: Handles exceptions and implements rate limiting.
- **Configuration**: Contains settings for the application in `appsettings.json` and `appsettings.Development.json`.

### Getting Started

1. Navigate to the `backend/QRCodeGenerator.API` directory.
2. Restore the NuGet packages:
   ```
   dotnet restore
   ```
3. Run the application:
   ```
   dotnet run
   ```
4. The API will be available at `http://localhost:5000`.

## Frontend

The frontend is a React application built with Vite. It provides a user interface for generating QR codes. Key components include:

- **QRCodeGenerator**: A component for inputting URLs and generating QR codes.
- **QRCodeDisplay**: A component for displaying the generated QR code and providing a download option.
- **UI Components**: Reusable components for buttons, inputs, and loading indicators.

### Getting Started

1. Navigate to the `frontend/client` directory.
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. The application will be available at `http://localhost:3000`.

## Usage

1. Open the application in your web browser.
2. Enter a valid URL in the input field.
3. Click the "Generate" button to create a QR code.
4. The generated QR code will be displayed, and you can download it as an image file.

## Future Enhancements

- Custom QR code styling options.
- User account management features.
- Advanced QR code content types.
- Analytics for tracking QR code usage.

## Resources

- [QRCoder Library](https://github.com/codebude/QRCoder)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [FluentValidation](https://fluentvalidation.net/)

## License

This project is licensed under the MIT License.