/* eslint-disable no-undef */
const electronConfigs = require('./webpack.electron')
const reactConfigs = require('./webpack.react')

module.exports = [
    electronConfigs,
    reactConfigs
]