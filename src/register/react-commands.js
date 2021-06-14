const vscode = require('vscode')
const create = require('../helpers/createFile')
const getTemplate = require('../helpers/getTemplate')

const registerVueCommands = (context) => {
	const classComponentCommand = vscode.commands.registerCommand('file-creator.react.class-component', (uri) => {
		const template = getTemplate(/*name*/ 'react-class-component')
		create(/*target path*/ uri.fsPath, /*format*/ 'js', /*content*/ template)
	})

	const functionComponentCommand = vscode.commands.registerCommand('file-creator.react.function-component', (uri) => {
		const template = getTemplate(/*name*/ 'react-function-component')
		create(/*target path*/ uri.fsPath, /*format*/ 'js', /*content*/ template)
	})

	context.subscriptions.push(classComponentCommand)
	context.subscriptions.push(functionComponentCommand)
}

module.exports = registerVueCommands