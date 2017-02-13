const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


// Global Reference of window object
let win


function createWindow () {
  // Browser window
  win = new BrowserWindow({width: 800, height: 600})

  // Load the index.html of the app
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //win.webContents.openDevTools();

  win.on('closed', () => {
    // Dereference window object
    win = null
  })
}

// Call when finished init
app.on('ready', createWindow)

// Quit when closed
app.on('window-all-closed', ()=> {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // MacOS recreate window in the app when dock icon is clicked
  if (win === null) {
    createWindow()
  }
})
