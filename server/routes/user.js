const express = require('express');
const router = express.Router();
const User = require('../models/user');
const crypto = require('crypto');
const multer = require('multer');

const storage = multer.diskStorage({
  destination:  (req, file, cb) =>{
    cb(null, '../src/upload/profile') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename:  (req, file, cb) =>{
    cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
  }
})
const upload = multer({ storage: storage })

router.post('/signup',  upload.single('file'),  (req, res) => {
  res.send('Uploaded:' + req.file);
  console.log(req.file);  
  
  // setting values
  const id = req.body.id;
  const password = req.body.password;
  const interest = req.body.interest;

  // const addUser = new User({
  //   id: id,
  //   password: password,
  //   interest: interest
  // });

  // encryption 
  // let cipher = crypto.createCipher('aes192', 'key');
  // cipher.update(addUser.password, 'utf8', 'base64');
  // let cipheredOutput = cipher.final('base64');
  // addUser.password = cipheredOutput;
  /*  
    //혹시 모를 복호화를 통해 남겨놓음
    //decryption
    let decipher = crypto.createDecipher('aes192', 'key');
    decipher.update(cipheredOutput, 'base64', 'utf8');
    let decipheredOutput = decipher.final('utf8');
  */
  // addUser.save(function (err) {
  //   if (err) {
  //     console.error(err);
  //     res.json({
  //       result: 0
  //     });
  //     return;
  //   }
  //   res.json({
  //     result: 1
  //   });
  // });
});

router.post('/login', (req, res) => {
  let cipher = crypto.createCipher('aes192', 'key');
  cipher.update(req.body.password, 'utf8', 'base64');
  let cipherPw = cipher.final('base64');

  User.findOne({
    id: req.body.id,
    password: cipherPw
  }, (err, id, password, user) => {
    if (err) return res.status(500).json({
      error: err
    });
    if (!id) return res.status(404).json({
      error: `${id} : ${password} user not found`
    });
    res.json(user);
  });
});





module.exports = router;
