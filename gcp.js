/*
Package json:
{
  "name": "gcp-sample",
  "version": "0.0.1",
  "dependencies": {
    "@google-cloud/vision": "^0.22.0",
  }
}

 */

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.labelDetection = (req, res) => {
    res.set('Access-Control-Allow-Origin', "*");
    res.set('Access-Control-Allow-Methods', 'GET, POST');

    var img = req.body.image;
    // Performs label detection
    client
        .labelDetection(Buffer.from(img, 'base64'))
        .then(function (results) {
            res.status(200).send(results);
        })
        .catch(err => {
            console.error('ERROR:', err);
            res.status(500).send(err);
        });
};
