const commandsRegistrar = require('../helpers/commandsRegistrar')

const registerVueCommands = (context) => {
	const commands = [
		{
			format: 'vue',
			templateName: 'vue-component',
			command: 'file-creator.vue.component'
		},
		{
			format: 'vue',
			templateName: 'vue-store',
			command: 'file-creator.vue.store'
		},
		{
			format: 'vue',
			templateName: 'vue-router',
			command: 'file-creator.vue.router'
		},
		{
			format: 'vue',
			templateName: 'vue-plugin',
			command: 'file-creator.vue.plugin'
		}
	]

	const commandsHandler = commandsRegistrar(commands)

	context.subscriptions.push(...commandsHandler)
}

module.exports = registerVueCommands