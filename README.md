<p align="center">
  <img src="assets/screenshot.png" alt="OWD About App" width="400" />
</p>

# About App

> About app for your Open Web Desktop client

## Overview

The OWD About App is a simple application for Open Web Desktop that displays basic information about your OWD instance.

## Quick Installation

1.  Navigate to your OWD client folder in your terminal:
    ```bash
    cd owd-client
    ```
2.  Install the module using npm or yarn:
    ```bash
    npm install https://github.com/owdproject/owd-app-about.git
    ```
3.  Register the application in your OWD configuration file (`owd.config.ts`):
    ```typescript
    // owd.config.ts
    export const owdConfig = {
        theme: 'github:owdproject/owd-theme-gnome',
    
        apps: [
            'owd-app-about'
        ]
    }
    ```

## Compatibility

This application is compatible with Open Web Desktop client version `3.0.0-alpha.0`.

## License

This project is released under the [MIT License](LICENSE).