/**
 * Created by keremozdemir on 18/05/2017.
 */

module.exports = function () {
    var client = './src/';
    var clientApp = client + 'app/';
    var assets = client + 'assets/';

    var config = {
        /*
         * File Path
         * */
        allJs: [
            './src/**/*.js',
            './*.js'
        ],
        client: client,
        css: assets + '**/*.css',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        /*
        * Bower and NPM locations
        * */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        }
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };
    return config;
};
