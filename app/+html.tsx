import {ScrollViewStyleReset} from "expo-router/html";
import type {PropsWithChildren} from "react";

// HTML template that Expo uses for every page of the web build (web only).
// It links the PWA manifest so browsers can install the app.

// Must match "experiments.baseUrl" in app.json (the GitHub Pages sub-path).
const BASE_URL = "/MobileApplications_project";

export default function Root({children}: PropsWithChildren) {
    return (
        <html lang="nl">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                {/* PWA */}
                <link rel="manifest" href={`${BASE_URL}/manifest.json`} />
                <meta name="theme-color" content="#E30147" />
                <link rel="icon" type="image/png" href={`${BASE_URL}/icons/icon-192.png`} />
                <link rel="apple-touch-icon" href={`${BASE_URL}/icons/icon-192.png`} />

                <ScrollViewStyleReset />
            </head>
            <body>{children}</body>
        </html>
    );
}
