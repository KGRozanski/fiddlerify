var express = require('express');
var app = express();
var path = require('path');
const chalk = require('chalk');


let PORT = 3030;

//CONFIGURE////////
let service = 'Kobieta';
let version = '184';
let pageType = '99';
///////////////////

// AWD
app.get('/js', function (req, res) {
    const filePath = `${convertDirname(__dirname)}projects/AWD/modules/deploy/webpack/production/${service}/${version}/pagetype${pageType}/main-dev.js`;
    logger(req.url.substring(1).toUpperCase(), filePath);
    res.sendFile(path.join(filePath));
});
app.get('/mobile', function (req, res) {
    const filePath = `${convertDirname(__dirname)}projects/AWD/modules/deploy/webpack/production/${service}/${version}/pagetype${pageType}/style-mobile-dev.css`;
    logger(req.url.substring(1).toUpperCase(), filePath);
    res.sendFile(path.join(filePath));
});

app.get('/desktop', function (req, res) {
    const filePath = `${convertDirname(__dirname)}projects/AWD/modules/deploy/webpack/production/${service}/${version}/pagetype${pageType}/style-desk-dev.css`;
    logger(req.url.substring(1).toUpperCase(), filePath);
    res.sendFile(path.join(filePath));
});


//BLOGCMS
app.get('/blogcms_js', function (req, res) {
    const filePath = `${convertDirname(__dirname)}projects/C2S/blogcms/cms-uom-web/src/main/webapp/production/sst/sst-dev.js`;
    logger(req.url.substring(1).toUpperCase(), filePath);
    res.sendFile(path.join(filePath));
});

app.get('/blogcms_css', function (req, res) {
    const filePath = `${convertDirname(__dirname)}projects/C2S/blogcms/cms-uom-web/src/main/webapp/themes/sst/content.css`;
    logger(req.url.substring(1).toUpperCase(), filePath);
    res.sendFile(path.join(filePath));
});

app.listen(PORT, () => {
    let log = ` 
${chalk.yellow('╔═══════════════════════════════════════════════════╗')}
${chalk.yellow('║')}  ༼ つ ◕_◕ ༽つ ${chalk.bold('FILE SERVER STARTED AT PORT:')} ${chalk.green(PORT)}   ${chalk.yellow('║')}
${chalk.yellow('╚═══════════════════════════════════════════════════╝')}`;
    console.log(log);
});

function logger(prefix, text) {
    console.log(
        getTime() + ' ' +
        chalk.bold(prefix) + ':',
        chalk.green(text + chalk.yellow.bold(" HAS BEEN SERVED"))
    );
}

function convertDirname(path) {
    const sliced = path.split("\\");
    return `${sliced[0]}/${sliced[1]}/${sliced[2]}/${sliced[3]}/`
}

function getTime() {
    let onlyTime = new Date().toISOString().split("T")[1].split(".")[0];
        onlyTime = onlyTime.split(':');
    return ( parseInt(onlyTime[0]) + 1 ) + ":" + onlyTime[1] + ":" + onlyTime[2];
}

//╭─────────────────────────────────────────────────────────────────╮
//│                                                                 │
//╰─────────────────────────────────────────────────────────────────╯
