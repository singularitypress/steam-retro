import { app, BrowserWindow, dialog } from "electron";
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("build/index.html");
}
app.on("ready", createWindow);
