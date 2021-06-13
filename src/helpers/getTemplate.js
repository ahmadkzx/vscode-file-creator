const fs = require('fs')
const path = require('path')
const vscode = require('vscode')

/**
 * get template of file
 * @param {String} name - name of file
 */
const getTemplate = (name) => {
	const templatePath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, `/.templates/${name}.template`)
	if (fs.existsSync(templatePath)) return fs.readFileSync(templatePath, 'utf8')

	const defaultTemplatePath = path.join(__dirname, '../', `/templates/${name}.template`)
	if (fs.existsSync(defaultTemplatePath)) return fs.readFileSync(defaultTemplatePath, 'utf8')

	return ''
}

module.exports = getTemplate