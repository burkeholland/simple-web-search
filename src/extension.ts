// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	let disposable = vscode.commands.registerCommand('simple-web-search.searchWeb', async () => {
		let searchEngine = vscode.workspace.getConfiguration().get("simpleWebSearch.searchEngine");

		let searchTerm = await vscode.window.showInputBox({
			placeHolder: 'Search for...',
		});

		if (searchTerm) {
			vscode.env.openExternal(vscode.Uri.parse(`https://www.${searchEngine}.com/search?q=${searchTerm}`));
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
