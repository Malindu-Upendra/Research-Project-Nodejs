const multer = require("multer");
const multerS3 = require("multer-s3-transform");
const AWS = require("aws-sdk");
const config = require("../config/s3.config")

const S3 = new AWS.S3({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY
})

const upload = multer({
  storage: multerS3({
    s3:S3,
    bucket: config.AWS_BUCKET_NAME,
    acl: 'public-read',
    key: function(req,file,cb){
      if(file.fieldname == "singlefile"){
        console.log("console log working");
        console.log(req.body['directory']);
        cb(null, "4Lrt2s6T9b0ltqSF0vse/" + file.originalname)
      }else if(file.fieldname == "multiplefile"){
        cb(null, "multiple/" + file.originalname)
      }
    }
  })
})

module.exports = upload.fields([
    {
        name:'singlefile', maxCount: 1
    },{
        name:'multiplefile', maxCount: 5
    }
])