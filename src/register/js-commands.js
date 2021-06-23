const commandsRegistrar = require('../helpers/commandsRegistrar')


const registerJsCommands = (context) => {
	const commands = [
		{
			format: 'js',
			templateName: 'js-array-module',
			command: 'file-creator.js.array-module'
		},
		{
			format: 'js',
			templateName: 'js-object-module',
			command: 'file-creator.js.object-module'
		},
		{
			format: 'js',
			templateName: 'js-function-module',
			command: 'file-creator.js.function-module'
		}
	]

	const commandsHandler = commandsRegistrar(commands)

	context.subscriptions.push(...commandsHandler)
}

module.exports = registerJsCommands