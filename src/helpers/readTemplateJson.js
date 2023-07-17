const fs = require('fs')
const path = require('path')
const vscode = require('vscode')

const userTemplatesFolder = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, '/.templates');

const isValidTemplateJson = (json) => {
    if (!json || typeof json !== 'object' || !json.combine || typeof json.combine !== 'object') {
        return false;
    }
    const { combine } = json;
    for (const category in combine) {
        const files = combine[category];
        if (!Array.isArray(files)) {
            return false;
        }
        for (const file of files) {
            if (!file || typeof file !== 'object' || !file.name || typeof file.name !== 'string' ||
                !file.file || typeof file.file !== 'string' || !file.file.endsWith('.template')) {
                return false;
            }
        }
    }
    return true;
};

const readTemplateJson = () => {

	const templatePath = path.join(userTemplatesFolder, 'template.json');
	let templateContent;
	try {
		templateContent = fs.readFileSync(templatePath, 'utf-8');
	}
	catch (err) {
		vscode.window.showErrorMessage(`Failed to read JSON file: ${err}`)
		console.error(`Failed to read JSON file,please check your template.json file: ${err}`);
		return null;
	}

	const template = JSON.parse(templateContent);

	if(!isValidTemplateJson(template)){
		vscode.window.showErrorMessage(`Invalid JSON format: ${templatePath}`)
		console.error(`Invalid JSON format: ${templatePath}`);
		return null
	}

	const result = {};
	for (const category in template.combine) {
		const files = template.combine[category];
		const fileNames = files.map(file => ({
			...file,
			path: path.join(__dirname, '.templates', file.file)
		}));
		result[category] = fileNames;
	}

	return result;
}

module.exports = {  readTemplateJson }