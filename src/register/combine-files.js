const fs = require('fs')
const path = require('path')
const vscode = require('vscode')
const getTemplate = require('../helpers/getTemplate')
const { readTemplateJson } = require('../helpers/readTemplateJson')
const replaceVarForContent = require('../helpers/replaceVarForContent')

const getCombineFiles = (category, templateMap) => {
	const item = templateMap[category];
	return item;
};


const createCombineFile = async (allCategory, templateMap, targetPath) => {

	const selectedCombineCate = await vscode.window.showQuickPick(allCategory, {
		title: `Please Chose Combine`,
	});

	if (!selectedCombineCate) { return }

	const selectedCombineArr = getCombineFiles(selectedCombineCate, templateMap)

	selectedCombineArr.forEach(async (selectedCombineFile) => {
		const format = selectedCombineFile.file.split('-')[0];
		const fileName = selectedCombineFile.file.split('.')[0];
		const newFileName = selectedCombineFile.name.split('.')[0];

		let content = getTemplate(fileName);
		const filePath = path.join(targetPath, `./${newFileName}.${format}`)

		content =replaceVarForContent(content, newFileName, targetPath)

		fs.writeFileSync(filePath, content, 'utf8');
		vscode.workspace.openTextDocument(filePath).then(vscode.window.showTextDocument);
	});
};
const registerCombineFiles = (context) => {
	const combineFilesCommand = vscode.commands.registerCommand(`file-creator.combine`, (uri) => {
		const templateJsonMap = readTemplateJson();

		if (!templateJsonMap) {
			return;
		}

		const combineCate = Object.keys(templateJsonMap)

		createCombineFile(combineCate, templateJsonMap, uri.fsPath);
	});
	context.subscriptions.push(combineFilesCommand)

}

module.exports = registerCombineFiles