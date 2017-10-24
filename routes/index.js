var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('public/jgr.txt','utf-8',function(err,data){//读取文件
    res.render('index', { abc: [1,2,3] ,bcd:data});
})
  
});
router.get('/efv', function(req, res, next) {
  res.render('aaa', { title: 'Express' });
  fs.writeFile('jgr2.txt','hehehe',function(err){//写入文件

  })
});

module.exports = router;
