var express = require('express');
var app = express();
var path = require('path');
const chalk = require('chalk');


let PORT = 3001;

//CONFIGURE////////
let service = 'Buzz';
let version = '192';
let pageType = '99';
///////////////////

app.get('/mobi', function (req, res) {
    const filePath = `${convertDirname(__dirname)}modules/deploy/webpack/production/${service}/${version}/pagetype${pageType}/style-mobile-dev.css`;
    console.log(
        chalk.bold("MOBILE: ") +
        chalk.green(filePath + chalk.yellow.bold(" HAS BEEN SERVED"))
    );
    res.sendFile(path.join(filePath));
});

app.get('/desktop', function (req, res) {
    const filePath = `${convertDirname(__dirname)}modules/deploy/webpack/production/${service}/${version}/pagetype${pageType}/style-desk-dev.css`;
    console.log(
        chalk.bold("DESKTOP: ") +
        chalk.green(filePath + chalk.yellow.bold(" HAS BEEN SERVED"))
    );
    res.sendFile(path.join(filePath));
});

app.listen(PORT, () => {
    console.log('༼ つ ◕_◕ ༽つ ' + chalk.yellow.bold.underline('FILE SERVER HAS IS LISTENING AT PORT:') + ' ' + chalk.green.bold(PORT) )
})

function convertDirname(path) {
    const sliced = path.split("\\");
    return `${sliced[0]}/${sliced[1]}/${sliced[2]}/${sliced[3]}/`
}
