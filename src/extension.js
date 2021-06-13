const registerVueCommands = require('./register/vue-commands')
const registerCustomFiles = require('./register/custom-files')

function activate(context) {
	registerCustomFiles(context)
	registerVueCommands(context)
}

module.exports = { activate }