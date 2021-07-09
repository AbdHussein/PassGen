const fs = require('fs');
const os = require('os');
const path = require('path');
const chalk = require('chalk');

const savePassword = (password) => {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 777, (e, id)=> {
        if(e){
            console.log(chalk.red("ERROR: Couldn't save password to a file.", e.message.split(',')[0]));
        }else{
            fs.write(id, password + os.EOL, null, 'utf-8', () => {
                fs.close(id, () => {
                    console.log(chalk.green('Password saved to passwords.txt'));
                })
            })
        }
    })
}

module.exports = savePassword;