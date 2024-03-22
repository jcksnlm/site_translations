import * as bodyParser from 'body-parser';
import * as nodemailer from 'nodemailer';
import * as https from 'https';
import * as fs from 'fs';
import { Express } from 'express';
const express = require('express');
const request = require('request');
const multer  = require('multer');
const streamifier = require('streamifier');
const readline = require('readline');
const {google} = require('googleapis');
const fileType = require('file-type');

// If modifying these scopes, delete token.json.
const SCOPES_DRIVE = ['https://www.googleapis.com/auth/drive'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH_DRIVE = 'token_drive.json';
const orcamentosFolderId = '??????';
const modelosFolderId = '?????';
const modeloOrcamentoName = 'modelo_orcamento.dotm';

const PORT = process.env.PORT || 5000;

const app:Express = express();

// const options = {
//     cert: fs.readFileSync('./keys/cert.pem'),
//     key: fs.readFileSync('./keys/key.pem')
// }

// TODO: env
const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/labtraducoes.com.br/cert.pem', 'utf8'),
    key: fs.readFileSync('/etc/letsencrypt/live/labtraducoes.com.br/privkey.pem', 'utf8'),
    ca: fs.readFileSync('/etc/letsencrypt/live/labtraducoes.com.br/chain.pem', 'utf8')
}
 // Add headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://labtraducoes.com.br');

    // TODO: env
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
    next();
});

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '51mb'}));

/*--------- ENDPOINTS  ----------*/

app.get('/test', (req, res) => {
    res.send('Hello!');
})

app.post('/send', (req, res) => {
    try {
        req.accepts('application/json');
        let body = req.body;
        let secretKey = '?????????';
        let verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['gRecaptchaResponse'] + "&remoteip=" + req.connection.remoteAddress;

        request(verificationUrl, function(error, response, captchaBody) {
            captchaBody = JSON.parse(captchaBody);
            //Success will be true or false depending upon captcha validation.
            // TODO: env
            if(captchaBody.success !== undefined && !captchaBody.success) {
                return res.status(403).json({"status" : 403,"responseDesc" : "Failed captcha verification"}).end();
            }
            var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
            body.html = body.html + '<br/>' + ip;

            // TODO: env
            Promise.all([
                sendMail(res, body),
                createPipefyCard(body.pipefyObj)
            ]).then((responses) => {
                var finalResponse = {
                    message: responses[0].message,
                    pipefyCardId: null
                };

                if (responses[1] && responses[1].pipefyCardId) {
                    finalResponse.pipefyCardId = responses[1].pipefyCardId;
                }
                res.send(finalResponse);
            }, (errors) => {
                console.log('errou promisses')
                console.log(JSON.stringify(errors));
            });

        });
    }
    catch(e) {
        console.log(e);
        res.status(500).send(e);
    }

});

var upload = multer({
  limits: { fieldSize: 53477376 }
});
app.post('/attach', upload.none(), (req, res) => {
    try {
        req.accepts('multipart/form-data');
        uploadDrive(res, req.body);
    }
    catch(e) {
        res.status(500).send(e);
    }
});


app.post('/logError', (req, res) => {
    try {
        req.accepts('application/json');
        let body = req.body;
        sendMail(res, body).then((response) => res.send(response), (error) => res.status.send(error));
    }
    catch(e) {
        console.log(e);
    }

});
/*--------- END ENDPOINTS  ----------*/





/*--------- EMAIL INTEGRATION  ----------*/
function sendMail(res, body) {
    return new Promise((resolve, reject) => {
        if (body.private) {
            console.log('Private form requested')
            resolve('Private form requested');
            return;
        }
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            // host: "email-smtp.us-east-1.amazonaws.com",
            // port: 587,
            // auth: {
            //     user: "AKIA3RZHD5SI5SUQ47XU",
            //     pass: "BJKZHcdG2GoVBIrgTfgRrZn8NnuFFUxa9hiH7yzbT1NE"
            // }
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "??????",
                pass: "???????"
            }
            // host: "smtp.mailtrap.io",
            // port: 2525,
            // auth: {
                //     user: "9de69dc3209cca",
                //     pass: "3de5154fd01d8e"
                // }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: 'contato@labtraducoes.com.br', // sender address
                to: '"Lab Traduções" <contato@labtraducoes.com.br>', // list of receivers
                subject: body.subject, // Subject line
                text: 'Dados:', // plain text body
                html: body.html,
                attachments: []
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                }
                else {
                    console.log('Message sent: %s', info.messageId);

                    var response = {
                        message: 'Email has been sent'
                    }
                    resolve(response);
                }
            });
    });
}

/*--------- EMAIL INTEGRATION END ----------*/





/*--------- PIPEFY INTEGRATION ----------*/
function getPipefyHeaders() {
    return {
        'content-type': 'application/json',
        authorization: 'Bearer ????????'
    };
}
function createPipefyCard(params) {

    return new Promise((resolve, reject) => {
        var finalResponse = {};
        try {
            function createBody(params) {

                var query =
                `{field_id: "nome", field_value: "${params.nome}"}` +
                `{field_id: "c_digo", field_value: "${params.codigo}"}` +
                `{field_id: "email", field_value: "${params.email}"}` +
                `{field_id: "telefone", field_value: "${params.telefone}"}` +
                `{field_id: "telefone_2", field_value: "${params.telefone2}"}` +
                `{field_id: "idioma_origem", field_value: "${params.idiomaOrigem}"}` +
                `{field_id: "idioma_destino", field_value: "${params.IdiomaDestino}"}` +
                `{field_id: "estado_para_envio", field_value: "${params.estadoParaEnvio}"}` +
                `{field_id: "apostila_de_haia", field_value: "${params.apostilaDeHaia}"}` +
                `{field_id: "corpo", field_value: "${params.observacoes}"}` +
                `{field_id: "quantidade_de_anexos", field_value: "${params.quantidadeDeAnexos}"}`;

                return `mutation{ createCard(input: {pipe_id: 734631 fields_attributes: [${query}]}) { card {id title }}}`;
            }

            var optionsPipefy = {
                method: 'POST',
                url: 'https://app.pipefy.com/queries',
                headers: getPipefyHeaders(),
                body: {
                    query: createBody(params)
                },
                json: true
            };

            request(optionsPipefy, function (error, response, body) {
                if (body && body.data && body.data.createCard && body.data.createCard.card && body.data.createCard.card.id) {
                    finalResponse.pipefyCardId = body.data.createCard.card.id;
                }
                else {
                    console.log('failed creating pipefy card');
                    console.log(error);
                    finalResponse.pipefyCardId = -1;
                }

                resolve(finalResponse);

            });

        }
        catch (e) {
            console.log('failed creating pipefy card');
            console.log(e);
            finalResponse.pipefyCardId = -1;
            resolve(finalResponse);
        }
    });

}

function updateGoogleDriveLink(cardId, folderId) {
    function createQuery(cardId, folderId) {
        return `mutation {` +
                `updateCardField(` +
                    `input: {` +
                    `card_id: ${cardId}` +
                    `field_id: "google_drive_url"` +
                    `new_value: "https://drive.google.com/open?id=${folderId}"` +
                    `}` +
                `) {` +
                    `card {` +
                        `id` +
                    `}` +
                `}` +
            `}`;
    }
    var optionsPipefy = {
        method: 'POST',
        url: 'https://app.pipefy.com/queries',
        headers: getPipefyHeaders(),
        body: {
            query: createQuery(cardId, folderId)
        },
        json: true
    };

    request(optionsPipefy, function (error, response, body) {
        if (error) {
            console.log(JSON.stringify(error));
            return null;
        };
        console.log('card updated');
    });
}

/*--------- PIPEFY INTEGRATION END ----------*/


/*--------- DRIVE INTEGRATION -----------*/

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback, res, body) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH_DRIVE, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, res, body);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES_DRIVE,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH_DRIVE, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH_DRIVE);
      });
      callback(oAuth2Client);
    });
  });
}

function copyFile(drive, fileId, folderId) {
    try {
        drive.files.copy({
            fileId: fileId
        }, (err, res) => {
            if (err) {
                console.log(`error on copy model ${err}`);
            }
            else {
                drive.files.update({
                    fileId: res.data.id,
                    uploadType: 'multipart',
                    removeParents: [modelosFolderId],
                    addParents: [folderId]
                }, (errUpdate, resUpdate) => {
                    if (err) {
                        console.log(`error on copy model ${errUpdate}`);
                    }
                    else {
                        console.log('Model orcamento copied');
                    }
                });
            }
        });

    }
    catch(e) {
        console.log(e)
    }
}

function findModels(drive) {
    return new Promise((resolve, reject) => {

        drive.files.list({
            pageSize: 1,
            fields: 'files(id)',
            q: `'${modelosFolderId}' in parents and name = '${modeloOrcamentoName}' and trashed = false`
        }, (err, res) => {
            var files = res.data.files;
            if (files.length) {
                resolve(files[0].id);
            }
            else {
                reject(err);
            }
        });
    });

}

function copyModels(drive, folderId) {
    findModels(drive).then((fileId) => {
        copyFile(drive, fileId, folderId)
    }, (e) => console.log(e));
}

function getFolderId(drive, folderName) {
    return new Promise((resolve, reject) => {
        drive.files.list({
            pageSize: 1,
            fields: 'files(id)',
            q: `mimeType='application/vnd.google-apps.folder' and '${orcamentosFolderId}' in parents and name = '${folderName}' and trashed = false`
        }, (err, res) => {
            if (err) return reject(err);
            if (res.data.files.length) {
                console.log(`folder found: ${res.data.files[0].id}`);
                resolve(res.data.files[0].id);
            }
            else {
                resolve(null);
            }
        });
    })
}

function createFolder(drive, folderName) {
    var fileMetadata = {
        'name': folderName,
        'mimeType': 'application/vnd.google-apps.folder',
        'parents': [orcamentosFolderId]
    };
    return new Promise((resolve, reject) => {
        drive.files.create({
            resource: fileMetadata,
            fields: 'id'
        }, function (err, file) {
            if (err) reject(err);
            console.log(`folder created: ${file.data.id}`);
            resolve(file.data.id);
        });
    });
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function createFiles(auth, res, body) {
    const drive = google.drive({version: 'v3', auth});
    getFolderId(drive, body.folderName).then((folderId) => {
        if (!folderId) {
            createFolder(drive, body.folderName).then((folderId) => writeFileInDrive(drive, folderId, body, res), (err) => res.status(500).send(err));
        }
        else {
            writeFileInDrive(drive, folderId, body, res);
        }
    },
    (err) => res.status(500).send(err));

}

function writeFileInDrive(drive, folderId, body, res) {
    var filesName = body.filesName;
    var files = body.files;
    var filesWritten = 0;
    var promises = [];

    if (body.pipefyCardId) {
        updateGoogleDriveLink(body.pipefyCardId, folderId);
    }
    copyModels(drive, folderId);
    if (files && files.length) {
        files.forEach((file, index) => {
            var promise = new Promise((resolve, reject) => {
                var fileMetadata = {
                    'name': filesName[index],
                    parents: [folderId]
                };
                var fileBuffer = new Buffer(file, 'binary');

                var media = {
                    mimeType: fileType(fileBuffer).mime,
                    body: streamifier.createReadStream(fileBuffer)
                };
                drive.files.create({
                    resource: fileMetadata,
                    media: media,
                    fields: 'id'
                }, function (err) {
                    if (err) {
                        reject(err)
                    }
                    else {
                        filesWritten++;
                        console.log(`File ${filesWritten}/${files.length} created.`);
                        resolve();
                    }
                });
            });
            promises.push(promise);
        });

        Promise.all(promises).then(function() {
            console.log(`All files have been created.`);
            res.send('Files have been sent.');
        }, (err) => {
            res.status(500).send(err)
        });
    }
    else {
        res.send('Files have been sent.');
    }


}

function uploadDrive(res, body) {
    // Load client secrets from a local file.
    fs.readFile('credentials.json', (err, content) => {
      if (err) return res.status(500).send(err);
      // Authorize a client with credentials, then call the Google Drive API.

      authorize(JSON.parse(content), createFiles, res, body);
    });
}


/*--------- DRIVE INTEGRATION END ----------*/

// TODO: env
// const server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
const server = https.createServer(options, app).listen(PORT, () => console.log(`Https server running at port ${ PORT }...`));
server.timeout = 1000 * 60 * 300
