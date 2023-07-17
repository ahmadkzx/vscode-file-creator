const fs = require('fs')
const path = require('path')
const vscode = require('vscode')
const createMultiFile = require('../helpers/createMultiFile')


const registerCustomFiles = (context) => {
	const ourTemplatesPath = path.join(__dirname, '../templates')
	let ourTemplateFiles = fs.readdirSync(ourTemplatesPath)
	ourTemplateFiles = ourTemplateFiles.map(file => file.replace('.template', ''))

	const userTemplatePath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, '/.templates')
	if (!fs.existsSync(userTemplatePath)) return
	let userTemplateFiles = fs.readdirSync(userTemplatePath)
	
	const isTemplateFiles = userTemplateFiles.filter(file => file.endsWith('.template'))
	userTemplateFiles = isTemplateFiles.map(file => file.replace('.template', ''))

	const diff = userTemplateFiles.filter(file => !ourTemplateFiles.includes(file))
	
	const customFilesCommand = vscode.commands.registerCommand('file-creator.custom', async (uri) => {
		// can pick Many
		const selectedCustomFiles = await vscode.window.showQuickPick(diff, { title: 'Custom Templates', canPickMany: true })
		createMultiFile(selectedCustomFiles, uri.fsPath)

	})
	context.subscriptions.push(customFilesCommand)
}

module.exports = registerCustomFiles