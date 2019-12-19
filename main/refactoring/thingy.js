const datatypeConverter = require('../util-datatype-converter');

let foo = 0, bar = 0;
let foobar = [0, 0, 0, 0, 0].length;

function doTheThing() {
  let s = "";
  for (; foo < 100; foo++) s += b(foo) + " ";
  return s.substring(0, s.length - 1);
}

function fooo() {
  foobar = [0, 0, 0, 0, 0].length;
  //let result = buzz();
  return buzz();
}

function buzz() {
  return convertUtf8HexToText("42757a7a");
}

function convertUtf8HexToText(utf8HexValues) {
  return String.fromCharCode.apply(null, datatypeConverter.parseHexString(utf8HexValues));
}

function barr() {
  bar = 0;
  let result = fizz();
  return result;
}

function fizz() {
  const fizzAsHex = "46697a7a";
  return convertUtf8HexToText(fizzAsHex);
}



function b(foo) {
  bar++;
  foobar--;
  let s = bar == 0b11 || foobar == 0 ? "" : foo + 1;
  if (bar == 0b11) s += barr();
  s = fizzOrBuzz(s);
  return s;
}

module.exports.doTheThing = doTheThing;

function fizzOrBuzz(s) {
  if (foobar == 0)
    s += fooo();
  return s;
}
