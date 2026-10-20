// Starter file — add your code here
// const fs = require("fs");
// const fsPromises = require("fs/promises");

// fs.readFile("assets/poem.txt", { encoding: 'utf8' }, (err, data) => {
//     console.log(data);
// });

// async function main() {
    // const data = await fsPromises.readFile("assets/poem.txt", { encoding: 'utf8' });
    // console.log(data);
// }

// main();

// fs.appendFileSync("assets/output.txt", "\nSecond line");
// fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");

// const exists = fs.existsSync("assets/output.txt");
// console.log(exists);

// const entries = fs.readdirSync("assets");
// console.log(entries);

// const buf = Buffer.from("Hello, Node!");
// console.log(buf);
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));

// const buf2 = Buffer.alloc(8, 0xff);
// console.log(buf2);

// const decode = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString('utf-8');
// console.log(decode);

// const crypto = require("crypto");

// const hash = crypto.createHash("sha256").update("freeCodeCamp!").digest('hex');
// console.log(hash);

// const random = crypto.randomBytes(16).toString('hex');
// console.log(random);

// const uid = crypto.randomUUID();
// console.log(uid);

// const os = require("os");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.uptime());
// console.log(os.cpus().length);

// const path = require("path");
// const fullPath = path.join(__dirname, "assets", "poem.txt");
// console.log(fullPath);
// console.log(path.basename(fullPath));
// console.log(path.dirname(fullPath));
// console.log(path.extname(fullPath));
// console.log(path.join("assets", "..", "server.js"));
// console.log(path.resolve("assets", "..", "server.js"));
// console.log(path.parse(fullPath));

// console.log(process.version);
// console.log(process.platform);
// console.log(process.env.NODE_ENV);
// console.log(process.argv);
// process.stdout.write("Hello from stdout\n");
// process.stderr.write("Hello from stderr\n");

const fs = require("fs");
// const readable = fs.createReadStream("assets/poem.txt", { encoding: "utf8" });

// readable.on("data", (chunk) => {
//   console.log(chunk);
// });

// readable.on("end", () => {
//   console.log("Done reading");
// });

// const writable = fs.createWriteStream("assets/stream-output.txt")
// writable.write("aimadox writes the first chunck\n")
// writable.write("aimadox writes the second chunck\n")

const readable = fs.createReadStream("assets/poem.txt");
const writable = fs.createWriteStream("assets/stream-output.txt");
readable.pipe(writable);