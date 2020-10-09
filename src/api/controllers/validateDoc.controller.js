const multer = require('multer');

const upload = multer({
    limit : {
        fileSize : 5000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.pdf/)) {
            return cb(new Error('Please upload PDF'));
        }
        cb(null, true);
    }
})

module.exports = upload;