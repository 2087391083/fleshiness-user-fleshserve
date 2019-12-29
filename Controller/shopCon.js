const express=require("express");
const shopmodel=require("../Model/shopModel");
const router=express.Router();
// shop/newshop 获取 多肉植物 类别最新商品
router.get("/newshop",function(req,res){
    let kid=1;
    let page=req.query.page ? req.query.page : 1;
    let limit1=req.query.limit ? req.query.limit : 8;
    new shopmodel().getNewInfo(kid,page,limit1,function(result){
        res.json(result);
    });
});  
// shop/priceshop 获取 多肉植物 类别按价格排序商品
router.get("/priceshop",function(req,res){
    let kid=1;
    let page=req.query.page ? req.query.page : 1;
    let limit1=req.query.limit ? req.query.limit : 8;
    new shopmodel().getPriceInfo(kid,page,limit1,function(result){
        res.json(result);
    });
});
// shop/recommendshop获取 多肉植物 类别推荐商品
router.get("/recommendshop",function(req,res){
    let kid=1;
    let page=req.query.page ? req.query.page : 1;
    let limit1=req.query.limit ? req.query.limit : 8;
    new shopmodel().getRecommendInfo(kid,page,limit1,function(result){
        res.json(result);
    });
});
// shop/newpotting 获取 绿植盆摘 类别最新商品
router.get("/newpotting",function(req,res){
    let kid=2;
    let page=req.query.page ? req.query.page : 1;
    let limit1=req.query.limit ? req.query.limit : 8;
    new shopmodel().getNewInfo(kid,page,limit1,function(result){
        res.json(result);
    });
});

router.get("/pricepotting",function(req,res){
    let kid=2;
    let page=req.query.page ? req.query.page : 1;
    let limit1=req.query.limit ? req.query.limit : 8;
    new shopmodel().getPriceInfo(kid,page,limit1,function(result){
        res.json(result);
    });
});

router.get("/recommendpotting",function(req,res){
    let kid=2;
    let page=req.query.page ? req.query.page : 1;
    let limit1=req.query.limit ? req.query.limit : 8;
    new shopmodel().getRecommendInfo(kid,page,limit1,function(result){
        res.json(result);
    });
});

router.get("/newmaterials",function(req,res){
    let kid=3;
    let page=req.query.page ? req.query.page : 1;
    let limit1=req.query.limit ? req.query.limit : 8;
    new shopmodel().getNewInfo(kid,page,limit1,function(result){
        res.json(result);
    });
});

router.get("/pricematerials",function(req,res){
    let kid=3;
    let page=req.query.page ? req.query.page : 1;
    let limit1=req.query.limit ? req.query.limit : 8;
    new shopmodel().getPriceInfo(kid,page,limit1,function(result){
        res.json(result);
    });
});

router.get("/recommendmaterials",function(req,res){
    let kid=3;
    let page=req.query.page ? req.query.page : 1;
    let limit1=req.query.limit ? req.query.limit : 8;
    new shopmodel().getRecommendInfo(kid,page,limit1,function(result){
        res.json(result);
    });
});

// 获取所有商品
router.get("/getallproduct",function(req,res){
    let page=req.query.page?req.query.page:1;
    let limit1=req.query.limit ? req.query.limit : 8;
    new shopmodel().getAllProduct(page,limit1,function(result){
        res.json(result);
    });
});

// 搜索功能
router.get("/search",function(req,res){
    let searchname=req.query.inputname;
    let page=req.query.page?req.query.page:1;
    let limit1=req.query.limit ? req.query.limit : 8;
    new shopmodel().getSearchProduct(searchname,page,limit1,function(result){
        res.json(result);
    });
});

module.exports=router;
