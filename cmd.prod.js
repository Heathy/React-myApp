"use strict";var exec=require("child_process").exec;module.exports=function(e){return new Promise(function(n,r){exec(e,function(e,c,o){e?(console.log(e),r(o)):n(c)})})};