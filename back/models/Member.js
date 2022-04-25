var mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    who:{
        type: String,
        trim: true,
    },
    pos:{
        type:String
    },
    character :{
        mbti :{
            type:String,
        },
        keyword :{
            type:Array,
        },
        blood :{
            type:String,
        },
        loc :{
            type:String,
        }
    },
    
})

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;