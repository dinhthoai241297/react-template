const aliases = (prefix = `src`) => ({
    _containers: `${prefix}/containers`,
    _routes: `${prefix}/routes`,
    _components: `${prefix}/components`,
    _hooks: `${prefix}/hooks`,
    _assets: `${prefix}/assets`,
    _utils: `${prefix}/utils`,
    _constants: `${prefix}/constants`,
    _actions: `${prefix}/actions`,
    _store: `${prefix}/store`,
    _selectors: `${prefix}/selectors`,
    _sagas: `${prefix}/sagas`,
    _reducers: `${prefix}/reducers`,
    _locales: `${prefix}/locales`,
})

module.exports = aliases
