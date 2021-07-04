const fs = require('fs')
const path = require('path')
const vscode = require('vscode')
const open = require('../helpers/openFile')

/**
 * create file using fs
 * @param {String} targetPath - file target path
 * @param {String} format - format of file
 * @param {String} content - content of file
 */
const createFile = async (targetPath, format, content) => {
	const fileName = await vscode.window.showInputBox({ title: 'File Name' })
	if (!fileName) return
	
	const filePath = path.join(targetPath, `./${fileName}.${format}`)

	content = content.replaceAll('%filename', fileName)

	let targetFolderName = targetPath.split('\\')
	targetFolderName = targetFolderName[targetFolderName.length - 1]
	content = content.replaceAll('%foldername', targetFolderName)
	
	fs.writeFileSync(filePath, content, 'utf8')

	open(filePath)
}

module.exports = createFile