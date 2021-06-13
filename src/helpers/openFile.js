const vscode = require('vscode')

/**
 * open created file
 * @param {String} filePath - created file path
 */
const open = (filePath) => {
	const openPath = vscode.Uri.file(filePath)
	vscode.commands.executeCommand('vscode.open', openPath)
}

module.exports = open