var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dist: 'uploads/' })

app.listen(3333, () => console.log('用瀏覽器開啟 http://localhost:3333\n'));

app.use(express.static('public'));
app.use('/static', express.static('files'));  // 提供下

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// POST method route
app.post('/upload', upload.single('myUploadFile'), (req, res) => {
  const information = `收到上傳資訊:
  文字欄位: ${req.body.filename}

  上傳檔案
  檔案欄位名稱: ${req.file.fieldname}
  原始檔名: ${req.file.originalname}
  檔案類型: ${req.file.mimetype}
  `
  console.log(information);
  res.send({
    body: req.body,
    file: req.file,
  });
});
