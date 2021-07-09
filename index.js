#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const clipboaredy = require('clipboardy');

const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');
const log = console.log;


program.version('1.0.0').description('Command-line password generator');

program
.option('-l, --length <number>', 'length of password', '8')
.option('-s, --save', 'save password to a file')
.option('-nn, --no-numbers', 'remove numbers')
.option('-ns, --no-symbols', 'remove symbols')
.parse();

const {length, save, numbers, symbols} = program.opts();

// Get Generated Password
const generatedPassword = createPassword(length, numbers, symbols); 

if(save){
    savePassword(generatedPassword);
}


//Copy to clipboard
clipboaredy.writeSync(generatedPassword);

// Output Generated Password
log(chalk.blue('Generated Password:'), chalk.bold(generatedPassword))
log(chalk.yellow('password copied to clipboard'));