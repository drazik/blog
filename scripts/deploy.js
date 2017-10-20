#!/usr/bin/env node 

const Client = require("ssh2").Client;
const klaw = require("klaw");
const path = require("path");
const mri = require("mri");

const args = mri(process.argv.slice(2));

const conn = new Client();

conn.on("ready", () => {
    console.log("Connected, beginning deployment.");

    conn.sftp((err, sftp) => {
        if (err) throw err;
        
        
        const localPath = process.cwd() + "/build";
        const remotePath = "blog";

        klaw("./build")
            .on("data", item => {
                if (item.stats.isDirectory()) {
                    const dirPath = remotePath + "/" + path.relative(localPath, item.path);
                    
                    sftp.readdir(dirPath, (err, list) => {
                        if (err) {
                            // le dossier n'existe pas, il faut le créer
                            sftp.mkdir(dirPath, (err) => {
                                if (err) throw err;

                                console.log(`Created ${dirPath} directory`);
                            });
                        }
                    });
                }
                else if (item.stats.isFile()) {
                    const filePath = remotePath + "/" + path.relative(localPath, item.path);

                    sftp.fastPut(item.path, filePath, (err) => {
                        if (err) throw err;

                        console.log(`Uploaded ${filePath} file`);
                    });
                }
            })
            .on("end", () => {
                console.log("Deployment ended. Disconnecting.");
                conn.end();
            });
    });
});

conn.connect({
    host: args.host,
    port: args.port,
    username: args.username,
    password: args.password,
});
