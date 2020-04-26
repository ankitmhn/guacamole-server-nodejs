#!/usr/bin/env node
 
const GuacamoleLite = require('guacamole-lite');
const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
 
const websocketOptions = {
    port: 8080 // we will accept connections to this port
};
 
const guacdOptions = {
    port: 4822 // port of guacd
};
 
const clientOptions = {
    crypt: {
        cypher: 'AES-256-CBC',
        key: 'MySuperSecretKeyForParamsToken12'
    },
    log: {
        level: 'DEBUG',
        stdLog: (...args) => {
            console.log('[DEBUG]', ...args)
        },
        errorLog: (...args) => {
            console.error('[ERROR]', ...args)
        }
    }
};
 
const guacServer = new GuacamoleLite(websocketOptions, guacdOptions, clientOptions);
//const guacServer = new GuacamoleLite({server}, guacdOptions, clientOptions);
//server.listen(8080);
