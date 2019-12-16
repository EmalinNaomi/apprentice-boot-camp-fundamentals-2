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
  let result = String.fromCharCode.apply(null, datatypeConverter.parseHexString("42757a7a"));
  return result;
}

function barr() {
  bar = 0;
  let result = String.fromCharCode.apply(null, datatypeConverter.parseHexString("46697a7a"));
  return result;
}

function b(foo) {
  bar++;
  foobar--;
  let s = bar == 0b11 || foobar == 0 ? "" : foo + 1;
  if (bar == 0b11) s += barr();
  if (foobar == 0) s += fooo();
  return s;
}

module.exports.doTheThing = doTheThing;