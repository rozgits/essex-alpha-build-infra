import { Command } from 'commander'
import { execute, BuildCommandOptions } from './execute'

export default function build(program: Command): void {
	program
		.command('build')
		.description('builds a library package')
		.option('-v, --verbose', 'verbose output')
		.option('--docs', 'enables documentation generation')
		.option(
			'--env <env>',
			'build environment (used by babel and webpack)',
			'development',
		)
		.option(
			'--mode <mode>',
			'enable production optimization or development hints ("development" | "production" | "none")',
			'development',
		)
		.action(async (options: BuildCommandOptions) => {
			const code = await execute(options)
			process.exit(code)
		})
}
