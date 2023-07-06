const path = require("path");
const express = require("express");

const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();
const fs = require("fs");

function setupUpload(app) {
  app.use(express.static(path.join(__dirname, "../../public")));

  app.post("/upload", multipartMiddleware, (req, res) => {
    try {
      fs.readFile(req.files.upload.path, function (err, data) {
        var newPath =
          __dirname + "../../../public/images/" + req.files.upload.name;
        fs.writeFile(newPath, data, function (err) {
          if (err) console.log({ err: err });
          else {
            let fileName = req.files.upload.name;
            let url = "/images/" + fileName;
            let msg = "Upload successfully";
            let funcNum = req.query.CKEditorFuncNum;

            res
              .status(201)
              .send(
                "<script>window.parent.CKEDITOR.tools.callFunction('" +
                  funcNum +
                  "','" +
                  url +
                  "','" +
                  msg +
                  "');</script>"
              );
          }
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  });
}
module.exports = setupUpload;
