import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'

let mainWindow: BrowserWindow | null = null

const createWidnow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })

    if(process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:4000')
    }
    else {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, '../public', 'template', 'index.html'),
                protocol: 'file:',
                slashes: true
            })
        )
    }

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.whenReady().then(() => {
    createWidnow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWidnow()
        }
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})