//  YYYY-MM-DD
const getCurrentDate = () => {
	const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
return`${year}-${month}-${day}`;
}

// hh:mm 
const getCurrentTime = () =>{
	const now = new Date();
const hour = String(now.getHours()).padStart(2, '0');
const minute = String(now.getMinutes()).padStart(2, '0');
return `${hour}:${minute}`;
}

/**
 * open created file
 * @param {String} content - created file content
 * * @param {String} fileName - fileName
 * * @param {String} content - created file content
 */
const replaceVarForContent = (content,fileName,targetPath) => {

    content = content.replaceAll('%filename', fileName)

	let targetFolderName = targetPath.split('\\')
	targetFolderName = targetFolderName[targetFolderName.length - 1]
	content = content.replaceAll('%foldername', targetFolderName)
	content = content.replaceAll('%date', getCurrentDate())
	content = content.replaceAll('%time', getCurrentTime())

    return content;
}

module.exports = replaceVarForContent