import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const page = await readFile(new URL("./dist/index.html", import.meta.url));
createServer((_, response) => {
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.end(page);
}).listen(3001, () => console.log("Pulseboard local dashboard: http://localhost:3001"));
