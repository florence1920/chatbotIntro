var express = require('express');
var router = express.Router();
var Member = require('../models/Member.js')
/* GET home page. */
router.get('/', async function(req, res, next) {
  const member = await Member.find({});
  res.send(member);
});

router.post('/', async function(req, res, next) {
  let mem = new Member(req.body);
  
  // const newMem = new Member ({
  //   who : mem.who,
  //   pos : mem.pos,
  //   character : {
  //     mbti : req.body.character.mbti,
  //     blood : req.body.character.blood,
  //     keyword : req.body.character.keyword,
  //     loc : req.body.character.loc
  //   }
  // })
  mem.save((err)=>{
    if(err) return res.json({success:false,err});
    return res.status(200).json({
      success:true
    })
  })
});

module.exports = router;
