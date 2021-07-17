const commandsRegistrar = require('../helpers/commandsRegistrar')

const registerReactCommands = (context) => {
	const commands = [
		{
			format: 'jsx',
			templateName: 'react-class-component',
			command: 'file-creator.react.class-component'
		},
		{
			format: 'jsx',
			templateName: 'react-function-component',
			command: 'file-creator.react.function-component'
		}
	]

	const commandsHandler = commandsRegistrar(commands)

	context.subscriptions.push(...commandsHandler)
}

module.exports = registerReactCommands