import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            workbox: {
                cleanupOutdatedCaches: true,
                cacheId: 'v1.0.0'
            },
            manifest: {
                "name": "VM Weather",
                "short_name": "VM Weather",
                "theme_color": "#1d2131",
                "background_color": "#111625",
                "display": "standalone",
                "orientation": "portrait",
                "start_url": ".",
                "icons": [
                    {
                        "src": "/weather-64.png",
                        "sizes": "64x64",
                        "type": "image/png"
                    },
                    {
                        "src": "/weather-192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/weather-256.png",
                        "sizes": "256x256",
                        "type": "image/png"
                    },
                    {
                        "src": "/weather-384.png",
                        "sizes": "384x384",
                        "type": "image/png"
                    },
                    {
                        "src": "/weather-512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ]
            }
        })
    ],
    css: {
        modules: {
            generateScopedName: "[name]_[local]_[hash:base64:5]"
        }
    },
    build: {
        manifest: true
    }
})
