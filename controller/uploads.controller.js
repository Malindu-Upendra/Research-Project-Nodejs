const upload = require('../middleware/s3.upload');

const uploadfile = async (req,res) => {
    upload(req,res, async function(err){
        if(err){
            return res.status(400).send({
                result: 0,
                message: err
            })
        }

        return res.status(200).send({
            redult: 1,
            message: "uploaded successfully"
        })
    })
};

module.exports = {
    uploadfile
};