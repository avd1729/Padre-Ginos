// Import the defineConfig helper from Vite for better type support and editor integration
import { defineConfig } from "vite";

// Import the official React plugin for Vite (enables JSX, Fast Refresh, etc.)
import react from "@vitejs/plugin-react";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// Export the Vite configuration
export default defineConfig({
    // Register plugins used by Vite
    plugins: [
        TanStackRouterVite(), react(), // Enables React support including JSX/TSX and Fast Refresh
    ],

    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true
            },
            "/public": {
                target: "http://localhost:3000",
                changeOrigin: true
            }
        }
    },

    test: {
        environment: "happy-dom",
        coverage: {
            reporter: ["text", "json", "html"],
        },
    },
});

