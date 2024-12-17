import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    // Register the "new-file-excalidraw-command.createFile" command
    const command = vscode.commands.registerCommand('new-file-excalidraw-command.createFile', async () => {
        // Prompt the user for input
        const input = await vscode.window.showInputBox({
            prompt: 'Enter the file name (use "-" to separate parts)',
        });

        if (!input) {
            vscode.window.showErrorMessage('No file name provided.');
            return;
        }

        // Generate the file path
        const fileName = `${input}.excalidraw.png`;
        const desktopPath = path.join(require('os').homedir(), 'Desktop');
        const filePath = path.join(desktopPath, fileName);

        // Create the file
        try {
            fs.writeFileSync(filePath, '');
            vscode.window.showInformationMessage(`Created file: ${filePath}`);

            // Open the file in VS Code
            exec(`code "${filePath}"`, (error) => {
                if (error) {
                    vscode.window.showErrorMessage(`Failed to open file: ${error.message}`);
                }
            });
        } catch (err) {
            vscode.window.showErrorMessage(`Error creating file: ${err}`);
        }
    });

    context.subscriptions.push(command);
}

export function deactivate() {
    // Clean up when the extension is deactivated
}
