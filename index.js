const cowsay = require("cowsay");
const myInformation = require('./information.js');


console.log(cowsay.say({text: `Salut mon prénom est ${myInformation.name} et je suis sur le campus de ${myInformation.campus}`}));