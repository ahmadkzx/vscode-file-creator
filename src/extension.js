const fs = require('fs')
const path = require('path')
const vscode = require('vscode')

function activate(context) {

	/**
   * get template of file
   * @param {String} name - name of file
   * @param {String} type - type of file
   */
	function getTemplate(name) {
		const templatePath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, `/.templates/${name}.template`)
		if (fs.existsSync(templatePath)) return fs.readFileSync(templatePath, 'utf8')

		const defaultTemplatePath = path.join(__dirname, `/templates/${name}.template`)
		if (fs.existsSync(defaultTemplatePath)) return fs.readFileSync(defaultTemplatePath, 'utf8')

		return ''
	}


	/**
   * create file using fs
   * @param {String} dirPath - file target path
   * @param {String} format - format of file
   * @param {String} content - content of file
   */
	async function create(dirPath, format, content) {
		const fileName = await vscode.window.showInputBox({ title: 'File Name' })
		const filePath = path.join(dirPath, `./${fileName}.${format}`)

		content = content.replaceAll('%filename', fileName)
		fs.writeFileSync(filePath, content, 'utf8')

		open(filePath)
	}


	/**
   * open created file
   * @param {String} filePath - created file path
   */
	function open(filePath) {
		const openPath = vscode.Uri.file(filePath)
		vscode.commands.executeCommand('vscode.open', openPath)
	}



	const vueCommandHandler = vscode.commands.registerCommand('file-creator.vue', (uri) => {
		create(/*target path*/uri.fsPath, /*format*/'vue', getTemplate(/*name*/'vue'))
	})
	context.subscriptions.push(vueCommandHandler)

	const reactCommandHandler = vscode.commands.registerCommand('file-creator.react', (uri) => {
		create(/*target path*/uri.fsPath, /*format*/'js', getTemplate(/*name*/'react'))
	})
	context.subscriptions.push(reactCommandHandler)
}

module.exports = { activate }