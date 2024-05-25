const { app, BrowserWindow,screen: electronScreen  } = require("electron/main");
const path = require("path");

const isMac = process.platform === "darwin";
const isDev = process.env.NODE_ENV !== 'development';
function createWindow() {
  const win = new BrowserWindow({
    width: electronScreen.getPrimaryDisplay().workArea.width,
    height:electronScreen.getPrimaryDisplay().workArea.height,
  });

  if(isDev){
    // win.webContents.openDevTools();
  }

  win.loadFile(path.join(__dirname, "./renderer/index.html"));
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});
