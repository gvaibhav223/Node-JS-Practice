// let loger = require("./logger");
// function Logging() {
//   loger.LastName("Vaibhav");
// }

// Logging();
// console.log( __filename);
// console.log(__dirname);
// const os = require("os");

// const totaMemory = os.totalmem();
// const freeMemory = os.freemem();
// const restmemory = totaMemory - freeMemory;
// console.log(
//   `the total memoy is ${totaMemory} and free Memory is ${freeMemory}`
// );
// console.log(restmemory / 100);
// const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir(".$", (err, res) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Result", res);
//   }
// });

const http = require("http");

const server = http.createServer((req, res) => {});
const port = 8001;

server.listen(port);
console.log(`Server is listening on ${port}`);

// CURD;
