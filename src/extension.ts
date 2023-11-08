// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as vars from './utils/vars';
import { posix } from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('VTC Studio activated!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('venticordstudio.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello, Ventineer! Version ' + vars.ver + ' is working well!');
	});
	let recruitment = vscode.commands.registerCommand('venticordstudio.VTCOpen', () => {
		const panel = vscode.window.createWebviewPanel(
			'vtcWebView',
			'VTC Studio',
			vscode.ViewColumn.One,
			{
				localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'rsc')]
			}
		  );
		  const iconURI = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'rsc', 'studioIcon.png'));
		  console.log("Icon URI:" + vscode.Uri.joinPath(context.extensionUri, 'rsc', 'studioIcon.png'))
		  console.log("Icon URI asWebviewUri:" + iconURI)
		  // And set its HTML content
		  panel.webview.html = vars.vtcStudioHTML(iconURI);
	});
	let ondatgoodcuz = vscode.commands.registerCommand('venticordstudio.PluginCreate', async () => {
		const pluginName = await vscode.window.showInputBox({ title: "Put your plugin name here..." });
		if (pluginName && vscode.workspace.workspaceFolders) {
			try {
				let wf = vscode.workspace.workspaceFolders[0].uri.path ;
				if (wf.endsWith("src/")) {
					vscode.window.showInformationMessage("You're in the src folder!")
					vscode.workspace.fs.createDirectory(vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, "/plugins/", pluginName))
					vscode.workspace.fs.writeFile(vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, "/plugins/", pluginName, "/index.tsx"), Buffer.from(vars.pluginFile.replace("&PluginName&", pluginName)))
				} else {
					vscode.workspace.fs.createDirectory(vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, "/src/plugins/", pluginName))
					vscode.workspace.fs.writeFile(vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, "/src/plugins/", pluginName, "/index.tsx"), Buffer.from(vars.pluginFile.replace("&PluginName&", pluginName)))
				}
				vscode.window.showInformationMessage("You have created " + pluginName + " in your Vencord folder!")
			} catch(err) {
				vscode.window.showErrorMessage("Error creating folder: " + err);
			}
	}});
	context.subscriptions.push(disposable);
	context.subscriptions.push(recruitment);
	context.subscriptions.push(ondatgoodcuz);
}

// This method is called when your extension is deactivated
export function deactivate() {}
