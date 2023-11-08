// Variables
import * as vscode from 'vscode';

export const ver = "1.0.0"
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
export const pluginFile = `
/*
Thanks for using Venticord Studio!
- the personal creator of Venticord and VTC Studio: freesmart!
*/
import definePlugin from "@utils/types";

export default definePlugin({
    name: "&PluginName&",
    description: "Replace me!",
    authors: [
        {
            id: 2763n,
            name: "Pencil",
        },
    ],
    patches: [],
    // It might be likely you could delete these and go make patches above!
    start() {},
    stop() {},
});
`