# MC WebSocket Bridge 

This is a simple WebSocket → Minecraft TCP bridge designed for browser-based Minecraft clients.

## Important
- Works with Eagler-style clients
- Requires Minecraft server (Minefort, VPS, etc.)
- Not compatible with Hypixel or normal public servers

## Deploy on Render

1. Push this repo to GitHub
2. Go to Render → New Web Service
3. Connect repo
4. It auto-deploys using render.yaml

## Config

Set environment variables:

- MC_HOST = your Minecraft server IP
- MC_PORT = 25565

##  Connect

Use:

wss://your-render-url.onrender.com
