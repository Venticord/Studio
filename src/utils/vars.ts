// Variables
import * as vscode from 'vscode';

export const ver = "prel"
export function vtcStudioHTML(iconURI: vscode.Uri) {
	return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Venticord Studio</title>
    </head>
    <body>
        <img src="${iconURI}" /><h1>Venticord Studio</h1><br>
        <button>click me!</button>
    </body>
    </html>`
}