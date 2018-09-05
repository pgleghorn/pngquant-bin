'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://raw.githubusercontent.com/pgleghorn/pngquant-binary/master/pngquant`;

module.exports = new BinWrapper()
	.src(`${url}`, 'darwin')
	.src(`${url}`, 'linux', 'x86')
	.src(`${url}`, 'linux', 'x64')
	.src(`${url}`, 'freebsd', 'x64')
	.src(`${url}`, 'win32')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'pngquant.exe' : 'pngquant');
