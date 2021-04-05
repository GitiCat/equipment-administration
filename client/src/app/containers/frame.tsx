import React from 'react'
import * as electron from 'electron'
import NavigationPanel from '../components/navigation-panel'

const { BrowserWindow } = require('electron').remote

const closeWindowButtonEvent = (window: electron.BrowserWindow | null) => {
    if(window?.isClosable())
        window.close()
}

const resizeWindowButtonEvent = (window: electron.BrowserWindow | null) => {
    if(window?.isResizable()) 
        window.isNormal() 
            ? window.maximize() 
            : window.unmaximize()
}

const hideWindowButtonEvent = (window: electron.BrowserWindow | null) => {
    if(window?.isMinimizable())
        window.minimize()
}

const WindowFrame: React.FunctionComponent = (props) => {
    const mainWindow = BrowserWindow.getFocusedWindow()
    
    return (
        <div className="window-frame">
            <div className="menu-bar">
                <div className="menu-bar--control-buttons">
                    <button type="button" name="close-window" 
                        onClick={(e) => closeWindowButtonEvent(mainWindow)}></button>
                    <button type="button" name="resize-window" 
                        onClick={(e) => resizeWindowButtonEvent(mainWindow)}></button>
                    <button type="button" name="hide-window" 
                        onClick={(e) => hideWindowButtonEvent(mainWindow)}></button>
                </div>
                <NavigationPanel/>
            </div>
            <div className="main">
                <div className="title-bar">
                    
                </div>
                <div className="content-container">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default WindowFrame