const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const serverConfig = require('./serverConfig.js');
const clientConfig = require('./clientConfig.js');

const entryFiles = glob.sync(path.join(__dirname, '../src/views/*/index-server.js'));
Object.keys(entryFiles).map(index => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/views\/(.*)\/index-server.js/);
    const pageName = match && match[1];

    if (pageName) {
        webpack(clientConfig[pageName], ()=>{});
        webpack(serverConfig[pageName], ()=>{});
    }
})