const commandsRegistrar = require('../helpers/commandsRegistrar')


const registerGraphqlCommands = (context) => {
	const commands = [
		{
			format: 'gql',
			templateName: 'graphql-query',
			command: 'file-creator.graphql.query'
		},
		{
			format: 'gql',
			templateName: 'graphql-mutation',
			command: 'file-creator.graphql.mutation'
		}
	]

	const commandsHandler = commandsRegistrar(commands)

	context.subscriptions.push(...commandsHandler)
}

module.exports = registerGraphqlCommands