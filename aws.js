/*
Package json:
{
  "name": "gcp-sample",
  "version": "0.0.1",
  "dependencies": {
    "aws-sdk": "2.315.0"
  }
}

 */

var AWS = require('aws-sdk');

var access_key = "[...]";
var secret_key = "[...]";
var creds = new AWS.Credentials(access_key, secret_key);
var rekognition = new AWS.Rekognition({region: "eu-west-1", credentials: creds});

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.labelDetection = (req, res) => {

    res.set('Access-Control-Allow-Origin', "*");
    res.set('Access-Control-Allow-Methods', 'GET, POST');

    var bitmap = Buffer.from(req.body.image, 'base64');

    rekognition.detectLabels({
        "Image": {
            "Bytes": bitmap,
        }
    }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            if (data.FaceMatches && data.FaceMatches.length > 0 && data.FaceMatches[0].Face) {
                res.send(data.FaceMatches[0].Face);
            } else {
                res.send(data);
            }
        }
    });
};
