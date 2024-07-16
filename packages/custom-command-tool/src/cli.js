#!/usr/bin/env node

require('ts-node').register({ project: __dirname + '/../tsconfig.json', transpileOnly: true });
require('./index.ts');
