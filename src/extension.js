const registerVueCommands = require('./register/vue-commands')

function activate(context) {
	registerVueCommands(context)
}

module.exports = { activate }