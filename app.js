var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dist: 'uploads/' })

app.listen(3333, () => console.log('node is running at http://localhost:3333/. Press Ctrl+C to stop.\n'));

app.use(express.static('public'));
app.use('/static', express.static('files'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// POST method route
app.post('/upload', upload.single('myUploadFile'), (req, res) => {
  const information = `informate of form:
  field of text: ${req.body.filename}

  upload file
  field of file: ${req.file && req.file.fieldname}
  file name: ${req.file && req.file.originalname}
  file of MIME type: ${req.file && req.file.mimetype}
  `
  console.log(information);
  res.send({
    body: req.body,
    file: req.file,
  });
});
