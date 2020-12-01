var express = require('express');
var app = express();
var path = require('path');
const chalk = require('chalk');


let PORT = 3001;

//CONFIGURE////////
let service = 'Buzz';
let version = '190';
let pageType = '99';
///////////////////

// AWD
app.get('/mobi', function (req, res) {
    const filePath = `${convertDirname(__dirname)}projects/AWD/modules/deploy/webpack/production/${service}/${version}/pagetype${pageType}/style-mobile-dev.css`;
    console.log(
        chalk.bold("MOBILE: ") +
        chalk.green(filePath + chalk.yellow.bold(" HAS BEEN SERVED"))
    );
    res.sendFile(path.join(filePath));
});

app.get('/desktop', function (req, res) {
    const filePath = `${convertDirname(__dirname)}projects/AWD/modules/deploy/webpack/production/${service}/${version}/pagetype${pageType}/style-desk-dev.css`;
    console.log(
        chalk.bold("DESKTOP: ") +
        chalk.green(filePath + chalk.yellow.bold(" HAS BEEN SERVED"))
    );
    res.sendFile(path.join(filePath));
});

//BLOGCMS
app.get('/blogcms_js', function (req, res) {
    const filePath = `${convertDirname(__dirname)}projects/C2S/blogcms/cms-uom-web/src/main/webapp/production/sst/sst-dev.js`;
    console.log(
        getFullHour() + ' ' +
        chalk.bold("blogcms_js: ") +
        chalk.green(filePath + chalk.yellow.bold(" HAS BEEN SERVED"))
    );
    res.sendFile(path.join(filePath));
});
app.get('/blogcms_css', function (req, res) {
    const filePath = `${convertDirname(__dirname)}projects/C2S/blogcms/cms-uom-web/src/main/webapp/themes/sst/content.css`;
    console.log(
        getFullHour() + ' ' +
        chalk.bold("blogcms_css: ") +
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

function getFullHour() {
    let onlyTime = new Date().toISOString().split("T")[1].split(".")[0];
        onlyTime = onlyTime.split(':');
    return ( parseInt(onlyTime[0]) + 1 ) + ":" + onlyTime[1] + ":" + onlyTime[2];
}