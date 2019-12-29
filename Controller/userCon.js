const express=require("express");
const usermodel=require("../Model/userModel");
const router=express.Router();
router.get("/usermsg",function(req,res){
    let username=req.query.username;
    new usermodel().getUserMsg(username,function(reqdata){
        res.json(reqdata);
    });
});

router.post("/setusermsg",function(req,res){
    let uid=req.body.userinfo.uid;
    let nickname=req.body.userinfo.nickname;
    let sex=req.body.userinfo.sex;
    let avatar=req.body.userinfo.avatar;
    // console.log(uid,nickname,sex,avatar);
    new usermodel().setUserMsg(uid,nickname,sex,avatar,function(reqdata){
        res.json(reqdata);
    });
});

router.get("/getaddress",function(req,res){
    let username=req.query.username;
    new usermodel().getAddress(username,function(reqdata){
        res.json(reqdata);
    });
});

router.post("/setaddress",function(req,res){
    delete req.body.aid;
    new usermodel().setAddress(req.body,function(reqdata){
        res.json(reqdata);
    });
});

router.get("/getalladdress",function(req,res){
    let username=req.query.username;
    console.log(username,"  56");
    new usermodel().getAllAddress(username,function(reqdata){
        res.json(reqdata);
    });
});

router.post("/deladdress",function(req,res){
    let aid=req.body.aid;
    new usermodel().delAddress(aid,function(reqdata){
        res.json(reqdata);
    });
});

router.post("/updateaddress",function(req,res){
    console.log(req.body);
    new usermodel().UpdateAddress(req.body,function(reqdata){
        res.json(reqdata);
    });
});
 
router.get("/getcollection",function(req,res){
    let uid=req.query.uid;
    new usermodel().getCollection(uid,function(reqdata){
        res.json(reqdata);
    });
});

router.post("/delcollect",function(req,res){
    let pid=req.body.pid;
    let uid=req.body.uid;
    new usermodel().delCollect(pid,uid,function(reqdata){
        res.json(reqdata);
    });
});

router.get("/shopdetail",function(req,res){
    let pid=req.query.pid;
    new usermodel().shopDetail(pid,function(reqdata){
        res.json(reqdata);
    });
});

router.post("/addcollect",function(req,res){
    let uid=req.body.uid;
    let pid=req.body.pid;
    let kid=req.body.kid;
    new usermodel().addCollect(uid,pid,kid,function(reqdata){
        res.json(reqdata);
    });
});

router.post("/addcart",function(req,res){
    let uid=req.body.uid;
    let pid=req.body.pid;
    let num=req.body.num;
    new usermodel().addCart(uid,pid,num,function(reqdata){
        res.json(reqdata);
    });
});

router.get("/getmycart",function(req,res){
    let uid=req.query.uid;
    new usermodel().getMyCart(uid,function(reqdata){
        res.json(reqdata);
    });
})

router.get("/login",function(req,res){
    let username=req.query.username;
    let pwd=req.query.pwd;
    new usermodel().Login(username,pwd,function(reqdata){
        res.json(reqdata);
    });
})

module.exports=router;