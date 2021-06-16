const vscode = require('vscode')
const create = require('../helpers/createFile')
const getTemplate = require('../helpers/getTemplate')

const registerJsCommands = (context) => {
	const jsArrayModuleCommand = vscode.commands.registerCommand('file-creator.js.array-module', (uri) => {
		const template = getTemplate(/*name*/ 'js-array-module')
		create(/*target path*/ uri.fsPath, /*format*/ 'js', /*content*/ template)
	})

	const jsObjectModuleCommand = vscode.commands.registerCommand('file-creator.js.object-module', (uri) => {
		const template = getTemplate(/*name*/ 'js-object-module')
		create(/*target path*/ uri.fsPath, /*format*/ 'js', /*content*/ template)
	})

	const jsFunctionModuleCommand = vscode.commands.registerCommand('file-creator.js.function-module', (uri) => {
		const template = getTemplate(/*name*/ 'js-function-module')
		create(/*target path*/ uri.fsPath, /*format*/ 'js', /*content*/ template)
	})

	context.subscriptions.push(jsArrayModuleCommand)
	context.subscriptions.push(jsObjectModuleCommand)
	context.subscriptions.push(jsFunctionModuleCommand)
}

module.exports = registerJsCommands