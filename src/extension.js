const vscode = require('vscode')

function activate(context) {
	let disposable = vscode.commands.registerCommand('file-creator.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from File Creator!');
	})

	context.subscriptions.push(disposable)
}
module.exports = { activate }
