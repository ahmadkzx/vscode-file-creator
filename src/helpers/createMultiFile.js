const fs = require('fs')
const path = require('path')
const vscode = require('vscode')
const open = require('../helpers/openFile')
const getTemplate = require('../helpers/getTemplate')
/**
 * create MultiFile using fs
 * @param {Array} selectedCustomFiles - file target path Array
 * @param {String} targetPath - format of file
 */
const createMultiFile = async (selectedCustomFiles, targetPath) => {
	const fileName = await vscode.window.showInputBox({ title: 'File Name' })
	if (!fileName) return
	selectedCustomFiles.forEach(async (selectedCustomFile) => {
		console.log("selectedCustomFile:",selectedCustomFile)
		let content = getTemplate(/*name*/ selectedCustomFile);
		const format = selectedCustomFile.split('-')[0];

		const filePath = path.join(targetPath, `./${fileName}.${format}`)

		content = content.replaceAll('%filename', fileName)

		let targetFolderName = targetPath.split('\\')
		targetFolderName = targetFolderName[targetFolderName.length - 1]
		content = content.replaceAll('%foldername', targetFolderName)

		fs.writeFileSync(filePath, content, 'utf8')

		open(filePath)

	});



}

module.exports = createMultiFile;