import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function createFolder(path: string) {
    fs.mkdir(path, (e) => {
        console.log("Created folder " + path)
    })
}