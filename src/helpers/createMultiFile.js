const fs = require('fs')
const path = require('path')
const vscode = require('vscode')
const open = require('../helpers/openFile')
const getTemplate = require('../helpers/getTemplate')
const replaceVarForContent = require('../helpers/replaceVarForContent')
/**
 * create MultiFile using fs
 * @param {Array} selectedCustomFiles - file target path Array
 * @param {String} targetPath - format of file
 */
const createMultiFile = async (selectedCustomFiles, targetPath) => {
	const fileName = await vscode.window.showInputBox({ title: 'File Name' })
	if (!fileName) return
	selectedCustomFiles.forEach(async (selectedCustomFile) => {

		let content = getTemplate(/*name*/ selectedCustomFile);
		const format = selectedCustomFile.split('-')[0];

		let index = 0;
		let newFileName = fileName;
		let filePath = path.join(targetPath, `./${fileName}.${format}`)

		while (fs.existsSync(filePath)) {
			index++;
			newFileName = `${fileName}(${index})`;
			filePath = path.join(targetPath, `./${newFileName}.${format}`);
		}

		fs.writeFileSync(filePath, replaceVarForContent(content, newFileName, targetPath), "utf8");

		open(filePath)

	});



}

module.exports = createMultiFile;