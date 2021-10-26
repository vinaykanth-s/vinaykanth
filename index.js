#!/usr/bin/env node
// const clearConsole = require("clear-any-console");
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: pkgJSON.name,
  tagLine: `Hi, nice to meet you!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true, // to clear console, otherwise false
});

//clears the console
// clearConsole();

// console.clear(); //commented bcs this soln may not be feasilble for other OSs.

console.log(`
Vinay Kanth - Frontend Engineer at Askadmissions.ai

A passionate software engineer and a problem solver 
with expertise in Frontend development using modern technologies
such as JavaScript, React, Material UI, HTML/CSS.

Twitter: https://twitter.com/VinaykanthS

`);
