const vscode = require('vscode')
const create = require('../helpers/createFile')
const getTemplate = require('../helpers/getTemplate')

const registerVueCommands = (context) => {
	const componentCommand = vscode.commands.registerCommand('file-creator.vue.component', (uri) => {
		const template = getTemplate(/*name*/ 'vue-component')
		create(/*target path*/ uri.fsPath, /*format*/ 'vue', /*content*/ template)
	})

	const storeCommand = vscode.commands.registerCommand('file-creator.vue.store', (uri) => {
		const template = getTemplate(/*name*/ 'vue-store')
		create(/*target path*/ uri.fsPath, /*format*/ 'js', /*content*/ template)
	})

	const routerCommand = vscode.commands.registerCommand('file-creator.vue.router', (uri) => {
		const template = getTemplate(/*name*/ 'vue-router')
		create(/*target path*/ uri.fsPath, /*format*/ 'js', /*content*/ template)
	})

	const pluginCommand = vscode.commands.registerCommand('file-creator.vue.plugin', (uri) => {
		const template = getTemplate(/*name*/ 'vue-plugin')
		create(/*target path*/ uri.fsPath, /*format*/ 'js', /*content*/ template)
	})

	context.subscriptions.push(componentCommand)
	context.subscriptions.push(storeCommand)
	context.subscriptions.push(routerCommand)
	context.subscriptions.push(pluginCommand)
}

module.exports = registerVueCommands