import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function outputLogs(fileLocation, date) {
    const outputDir = path.join(__dirname, "..", "output");
    const outputFile = path.join(outputDir, `logs_${date}.txt`);

    const readStream = fs.createReadStream(fileLocation, "utf8");
    const writeStream = fs.createWriteStream(outputFile, "utf8");
    const rl = readline.createInterface({ input: readStream });

    rl.on("line", (line) => {
        if (line.startsWith(date)) {
            writeStream.write(line + "\n");
        }
    });

    rl.on("close", () => {
        writeStream.end();
    });
}

function main() {
    try {
        const date = process.argv[2];
        if (!date) throw new Error("Date is required (YYYY-MM-DD)");
        const fileLocation = path.join(__dirname, "logs_2024.log");
        outputLogs(fileLocation, date);
    } catch (error) {
        console.error(error.message);
    }
}

main();
