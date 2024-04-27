'use strict';


/**
 * Execute the operation between 2 numeric numbers
 *
 * body CalculationRequest 
 * operation String 
 * returns inline_response_201
 **/
exports.calculatePOST = function(body,operation) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0.8008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * LogIn
 *
 * body LogInRequest 
 * returns inline_response_201_1
 **/
exports.loginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

