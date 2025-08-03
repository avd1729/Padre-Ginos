// Import the defineConfig helper from Vite for better type support and editor integration
import { defineConfig } from "vite";

// Import the official React plugin for Vite (enables JSX, Fast Refresh, etc.)
import react from "@vitejs/plugin-react";

// Export the Vite configuration
export default defineConfig({
    // Register plugins used by Vite
    plugins: [
        react(), // Enables React support including JSX/TSX and Fast Refresh
    ],
});
