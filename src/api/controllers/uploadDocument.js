const Document = require('../../models/document');
const fs = require('fs');
const aws = require('aws-sdk');

const s3 = new aws.S3({
    accessKeyId : process.env.S3_ID,
    secretAccessKey : process.env.S3_SECRET_KEY
})

const uploadDocument = async (req, res) => {
    try {
        const buffer = req.file.buffer;
        if (!buffer) {
            throw new Error('Buffer did not generated');
        }

        const params = {
            Bucket : process.env.BUCKET_NAME,
            Key : 'doc2.pdf',
            Body : buffer
        }

        s3.upload(params, async (err, data) => {
            if (err) {
                throw err;
            }
            console.log('data', data);
            const document = new Document({location: data.Location, ...req.body});
            await document.save();
        })

        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}

module.exports = uploadDocument;