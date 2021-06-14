const registerVueCommands = require('./register/vue-commands')
const registerCustomFiles = require('./register/custom-files')
const registerReactCommands = require('./register/react-commands')

function activate(context) {
	registerCustomFiles(context)
	registerVueCommands(context)
	registerReactCommands(context)
}

module.exports = { activate }