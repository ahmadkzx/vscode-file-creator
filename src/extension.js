const registerJsCommands = require('./register/js-commands')
const registerVueCommands = require('./register/vue-commands')
const registerCustomFiles = require('./register/custom-files')
const registerReactCommands = require('./register/react-commands')
const registerGraphqlCommands = require('./register/graphql-commands')

function activate(context) {
	registerJsCommands(context)
	registerCustomFiles(context)
	registerVueCommands(context)
	registerReactCommands(context)
	registerGraphqlCommands(context)
}

module.exports = { activate }