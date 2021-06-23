const vscode = require('vscode')
const create = require('../helpers/createFile')
const getTemplate = require('../helpers/getTemplate')

function commandRegistrar(commands) {
	return commands.map(({ command, templateName, format }) => {
		return vscode.commands.registerCommand(command, (uri) => {
			const template = getTemplate(/*name*/ templateName)
			create(/*target path*/ uri.fsPath, /*format*/ format, /*content*/ template)
		})
	})
}

module.exports = commandRegistrar