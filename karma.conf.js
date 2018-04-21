let webpack = require('webpack');

// TODO exclude css files

module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome' ], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework
        files: [
            './config/webpack.tests.js' //just load this file
        ],
        plugins: [ 'karma-chrome-launcher', 'karma-chai', 'karma-mocha',
            'karma-sourcemap-loader', 'karma-webpack', 'karma-coverage',
            'karma-mocha-reporter'
        ],
        preprocessors: {
            './config/webpack.tests.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
        },
        reporters: [ 'mocha', 'coverage' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /(scss|css)\//,
                        options: require('./config/babel.dev')
                    },
                    { //delays coverage til after tests are run, fixing transpiled source coverage error
                        test: /\.js$/,
                        exclude: /(test|node_modules|bower_components|scss)\/|\.(css|scss)$/,
                        loader: 'istanbul-instrumenter-loader',
                        options: { esModules: true },
                        enforce: 'post'
                    }
                ]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },
        coverageReporter: {
            type: 'html', //produces a html document after code is run
            dir: 'coverage/' //path to created html doc
        }
    });
};