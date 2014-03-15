postboard-fs
============

File system store for PostBoard

## Install

    npm install postboard-fs

## Express setup

    var express = require('express');
    var postboard = require('postboard-fs');
    
    var app = express();
    express.use(postboard(__dirname + '/store'));
    
    app.listen(3000);

## Usage

HTTP POST data to URLs to save it.

HTTP GET to obtain the data at that URL.

