const fs = require('fs')
const path = require('path')
const vscode = require('vscode')

/**
 * get template of file
 * @param {String} name - name of file
 */
const getTemplate = (name) => {
	const templateDirPath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, '/.templates')
	const templateFilePath = path.join(templateDirPath, `/${name}.template`)
	if (fs.existsSync(templateDirPath) && fs.existsSync(templateFilePath)) return fs.readFileSync(templateFilePath, 'utf8')

	const defaultTemplatePath = path.join(__dirname, `../templates/${name}.template`)
	if (fs.existsSync(defaultTemplatePath)) return fs.readFileSync(defaultTemplatePath, 'utf8')

	return ''
}

module.exports = getTemplate