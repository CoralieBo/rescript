// Generated by ReScript, PLEASE EDIT WITH CARE

import * as $$Crypto from "./Crypto.res.mjs";

function add(a, b) {
  return a + b | 0;
}

console.log(3);

console.log($$Crypto.generateEcKeyPair());

console.log($$Crypto.hashSHA256("Hello, World!"));

var match = $$Crypto.generateEcKeyPair();

var privateKey = match[1];

var publicKey = match[0];

var signature = $$Crypto.signData("Hello, World!", privateKey);

var isValid = $$Crypto.verifySignature("Hello, World!", signature, publicKey);

console.log(isValid);

export {
  add ,
  publicKey ,
  privateKey ,
  signature ,
  isValid ,
}
/*  Not a pure module */
