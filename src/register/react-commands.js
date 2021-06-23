const commandsRegistrar = require('../helpers/commandsRegistrar')

const registerReactCommands = (context) => {
	const commands = [
		{
			format: 'js',
			templateName: 'react-class-component',
			command: 'file-creator.react.class-component'
		},
		{
			format: 'js',
			templateName: 'react-function-component',
			command: 'file-creator.react.function-component'
		}
	]

	const commandsHandler = commandsRegistrar(commands)

	context.subscriptions.push(...commandsHandler)
}

module.exports = registerReactCommands