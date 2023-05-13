//SOMAR

const { somar } = require("./script.js");
var assert = require('assert');

assert(somar(9,7)==16,"9+7 é igual a 16");
assert(somar(8,0)==8,"8+0 é igual a 8");
assert(somar(400,600)==1000,"400+600 é igual a 1000");
assert(somar(0,0)==0,"0+0 é igual a 0");
assert(somar(0,(-3))==-3,"0+(-3) é igual a -3");
assert(somar(50,(-30))==20,"50(-30) é igual a 20");
assert(somar(100,80)==180,"100+80 é igual a 180");
assert(somar(1000,2500)==3500,"1000+2500 é igual a 3500");
assert(somar((-30),30)==0,"(-30)+30 é igual a 0");

// SUBTRAÇÃO

const { subtracao } = require("./script.js");
var assert = require('assert');

assert(subtracao(50,5)==45,"50-5 é igual a 45");
assert(subtracao(5,50)==-45,"5-50 é igual a -45");
assert(subtracao(20,40)==-20,"20-40 é igual a -20");
assert(subtracao((-30),40)==-70,"(-30)-40 é igual a -70");
assert(subtracao(90,2)==88,"90-2 é igual a 88");
assert(subtracao(30,10)==20,"30-10 é igual a 20");
assert(subtracao(45,40)==5,"45-40 é igual a 5");
assert(subtracao((-60),20)==-80,"(-60)-20 é igual a -80");
assert(subtracao((-150),10)==-160,"(-150)-10 é igual a -160");

// MULTIPLICAÇÃO

const { multiplicacao } = require("./script.js");
var assert = require('assert');

assert(multiplicacao(20,40)==800,"20*40 é igual a 800");
assert(multiplicacao(2,(-2))==-4,"2*(-2) é igual a -4");
assert(multiplicacao(150,(-1))==-150,"150*(-1) é igual a -150");
assert(multiplicacao(1500,0)==0,"1500*0 é igual a 0");
assert(multiplicacao(600,3)==1800,"600*3 é igual a 1800");
assert(multiplicacao(90,(-3))==-270,"90*(-3) é igual a -270");
assert(multiplicacao(1,30)==30,"1*30 é igual a 30");
assert(multiplicacao(0,40)==0,"0*40 é igual a 0");
assert(multiplicacao(25,(-25))==-625,"25*(-25) é igual a -625");

// DIVISÃO 

const { divisao } = require("./script.js");
var assert = require('assert');

assert(divisao(80,8)==10,"80/8 é igual a 10");
assert(divisao(40,22)==1.8181818181818181,"40/22 é igual a 1.8181818181818181");
assert(divisao(100,5)==20,"100/5 é igual a 20");
assert(divisao(500,100)==5,"500/100 é igual a 5");
assert(divisao(1000,500)==2,"1000/500 é igual a 2");
assert(divisao(0,5)==0,"0/5 é igual a 0");
assert(divisao(60,3)==20,"60/3 é igual a 20");
assert(divisao(90,4)==22.50,"90/4 é igual a 22.50");
assert(divisao(81,3)==27,"81/3 é igual a 27");
assert(divisao(1,0)=="Error","1/0 é igual a error");

// // RAIZ QUADRADA 

const { raizQuadrada } = require("./script.js");
var assert = require('assert');

assert(raizQuadrada(80)==8.94427190999916,"Raiz de 80 é igual a 8.94427190999916");
assert(raizQuadrada(9)==3,"Raiz de 9 é igual a 3");
assert(raizQuadrada(20)==4.47213595499958,"Raiz de 20 é igual a 4.47213595499958");
assert(raizQuadrada(90)==9.486832980505138,"Raiz de 90 é igual a 9.486832980505138");
assert(raizQuadrada(1000)==31.622776601683793,"Raiz de 1000 é igual a 31.622776601683793");
assert(raizQuadrada(40)==6.324555320336759,"Raiz de 40 é igual a 6.324555320336759");
assert(raizQuadrada(60)==7.745966692414834,"Raiz de 60 é igual a 7.745966692414834");
assert(raizQuadrada(2000)==44.721359549995796,"Raiz de 2000 é igual a 44.721359549995796");
assert(raizQuadrada(169)==13,"Raiz de 169 é igual a 13");

// // EXPONENCIAÇÃO 

const { exponenciacao } = require("./script.js");
var assert = require('assert');

assert(exponenciacao(3,0)==1,"3^0 é igual a 1");
assert(exponenciacao(2,2)==4,"2^2 é igual a 4");
assert(exponenciacao(5,5)==3125,"5^5 é igual a 3125");
assert(exponenciacao(6,3)==216,"6^3 é igual a 216");
assert(exponenciacao(25,2)==625,"25^2 é igual a 625");


// // NÚMERO PAR - IMPAR 

const { parImpar } = require("./script.js");
var assert = require('assert');

assert(parImpar(81)=="Ímpar","81 é ímpar");
assert(parImpar(2)=="Par","2 é par");
assert(parImpar(4)=="Par","4 é par");
assert(parImpar(100)=="Par","100 é par");
assert(parImpar(30)=="Par","30 é par");
assert(parImpar(0)=="Par","0 é par");


// // NÚMERO PRIMO

const { numberPrimo } = require("./script.js");
var assert = require('assert');

assert(numberPrimo(5)=="Primo","5 é Primo");
assert(numberPrimo(50)=="Não é primo","50 Não é primo");
assert(numberPrimo(300)=="Não é primo","300 Não é primo");
assert(numberPrimo(100)=="Não é primo","100 Não é primo");
assert(numberPrimo(0)=="Não é primo","0 Não é primo");

// // FATORIAL

const { fatorial } = require("./script.js");
var assert = require('assert');

assert(fatorial(5)==120,"fatorial de 5 é igual a 120");
assert(fatorial(10)==3628800,"fatorial de 10 é igual a 3628800");
assert(fatorial(12)==479001600,"fatorial de 12 é igual a 479001600");
assert(fatorial(0)==1,"fatorial de 0 é igual a 1");
assert(fatorial(9)==362880,"fatorial de 9 é igual a 362880");
assert(fatorial(-10)==1,"fatorial de -10 é igual a 1");