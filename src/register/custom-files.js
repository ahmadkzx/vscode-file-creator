const fs = require('fs')
const path = require('path')
const vscode = require('vscode')
const create = require('../helpers/createFile')
const getTemplate = require('../helpers/getTemplate')

const registerCustomFiles = (context) => {
	const ourTemplatesPath = path.join(__dirname, '../templates')
	let ourTemplateFiles = fs.readdirSync(ourTemplatesPath)
	ourTemplateFiles = ourTemplateFiles.map(file => file.replace('.template', ''))

	const userTemplatePath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, '/.templates')
	if (!fs.existsSync(userTemplatePath)) return
	let userTemplateFiles = fs.readdirSync(userTemplatePath)
	userTemplateFiles = userTemplateFiles.map(file => file.replace('.template', ''))

	const diff = userTemplateFiles.filter(file => !ourTemplateFiles.includes(file))

	const customFilesCommand = vscode.commands.registerCommand('file-creator.custom', async (uri) => {
		
		const selectedCustomFile = await vscode.window.showQuickPick(diff, { title: 'Custom Templates' })
		const template = getTemplate(/*name*/ selectedCustomFile)
		const fileFormat = selectedCustomFile.split('-')[0]
		create(/*target path*/ uri.fsPath, /*format*/ fileFormat, /*content*/ template)
	})
	context.subscriptions.push(customFilesCommand)
}

module.exports = registerCustomFiles