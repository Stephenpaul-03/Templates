#!/usr/bin/env node

const [,, command, ...args] = process.argv;

switch(command) {
  case "type 1":
    console.log("redirects to type 1's logic");
    break;
  case "type 2":
    console.log("redirects to type 2's logic");
    break;
  case "type 3":
    console.log("redirects to type 3's logic");
    break;
  default:
    console.log(`Unknown command: ${command}`);
    console.log("Available commands: type 1, type 2, type 3");
}
