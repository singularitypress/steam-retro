const { app, BrowserWindow, dialog } = require("electron");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadURL("http://localhost:3000");
};
app.on("ready", createWindow);
