import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	// Register the "new-file-excalidraw-command.createFile" command
	const command = vscode.commands.registerCommand('new-file-excalidraw-command.createFile', async () => {
		// Prompt the user for a file name
		const input = await vscode.window.showInputBox({
			prompt: 'Enter the file name (use "-" to separate parts)',
		});

		if (!input) {
			vscode.window.showErrorMessage('No file name provided.');
			return;
		}

		// Prompt the user to choose a location
		const locationChoice = await vscode.window.showQuickPick(
			['Document Directory', 'Desktop Directory', 'Custom Location'], 
			{
				placeHolder: 'Select where to create the file',
			}
		);

		if (!locationChoice) {
			vscode.window.showErrorMessage('No location selected.');
			return;
		}

		// Determine the base directory
		let basePath: string;
		if (locationChoice === 'Document Directory') {
			basePath = path.join(require('os').homedir(), 'Documents');
		} else if (locationChoice === 'Desktop Directory') {
			basePath = path.join(require('os').homedir(), 'Desktop');
		} else {
			// Custom location: Prompt the user to select a folder
			const uri = await vscode.window.showOpenDialog({
				canSelectFiles: false,
				canSelectFolders: true,
				canSelectMany: false,
				openLabel: 'Select Folder',
			});
			if (!uri || uri.length === 0) {
				vscode.window.showErrorMessage('No folder selected.');
				return;
			}
			basePath = uri[0].fsPath;
		}

		// Generate the file path
		const fileName = `${input}.excalidraw.png`;
		const filePath = path.join(basePath, fileName);

		// Create the file
		try {
			if (!fs.existsSync(filePath)) {
				fs.writeFileSync(filePath, '');
			}
			vscode.window.showInformationMessage(`File created: ${filePath}`);

			// Open the file in VS Code
			try {
				const uri = vscode.Uri.file(filePath);
				await vscode.commands.executeCommand('vscode.open', uri);
			} catch (error) {
				vscode.window.showErrorMessage(`Failed to open file: ${error}`);
			}
		} catch (err) {
			vscode.window.showErrorMessage(`Error creating file: ${err}`);
		}
	});

	// Subscribe to the command
	context.subscriptions.push(command);
}

export function deactivate() {
	// No cleanup is necessary as there is no autosave logic
}
