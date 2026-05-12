const WebSocket = require("ws");
const net = require("net");


const MC_HOST = process.env.MC_HOST || "ricemunchersunited.minefort.com";
const MC_PORT = process.env.MC_PORT || 25565;


const PORT = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: PORT });

console.log("WebSocket Bridge running on port " + PORT);

wss.on("connection", (ws) => {
    console.log("Client connected");

    
    const mc = net.createConnection({
        host: MC_HOST,
        port: MC_PORT
    });

    mc.on("connect", () => {
        console.log("⛏ Connected to Minecraft server");
    });

    // Browser → Minecraft
    ws.on("message", (data) => {
        if (mc.writable) mc.write(data);
    });

    // Minecraft → Browser
    mc.on("data", (data) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(data);
        }
    });

    ws.on("close", () => {
        console.log("Client disconnected");
        mc.end();
    });

    mc.on("close", () => {
        ws.close();
    });

    mc.on("error", (err) => {
        console.log("MC error:", err.message);
    });
});
