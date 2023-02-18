// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext } from 'vscode'

// This method is called when your extension is activated
export async function activate(context: ExtensionContext) {
  await commands.executeCommand('workbench.action.reloadWindow')
}

export function deactivate() {}
