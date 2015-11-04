"use strict";
var PM = require('./lib/main').PM;
// 外部接口
var p = new PM();
require('./plugins/innerPlugins').init(p);

module.exports = p;
