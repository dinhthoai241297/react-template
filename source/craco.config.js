const path = require(`path`)
const { getLoader, loaderByName } = require(`@craco/craco`)
const alias = require(`./src/config/aliases`)

const SRC = `./src`
const aliases = alias(SRC)

const resolvedAliases = Object.fromEntries(
    Object.entries(aliases).map(([key, value]) => [
        key,
        path.resolve(__dirname, value),
    ])
)

module.exports = {
    webpack: {
        alias: resolvedAliases,
        configure: (webpackConfig, { env, paths }) => {
            // load scss with pattern (./assets/styles/_index.scss)
            webpackConfig.module.rules.push({
                test: /\.s[ac]ss$/i,
                enforce: 'pre',
                loader: 'import-glob-loader',
            })

            return webpackConfig
        },
    },
}
