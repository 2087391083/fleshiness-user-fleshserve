const dbBase=require("../dbBase");
class userModel extends dbBase{
    constructor(){
        super();
        this.table="users";
    }
    getUserMsg(userName,callback){
        let sql=`select * from ${this.table} where username=?`;
        this.mysql.query(sql,[userName],function(err,results){
            if(err){
                callback({code:-1,msg:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
        this.mysql.end();
    }
    setUserMsg(uid,nickname,sex,avatar,callback){
        let sql=`update ${this.table} set nickname=?,sex=?,avatar=? where uid=${uid};`;
        this.mysql.query(sql,[nickname,sex,avatar],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,msg:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }
    getAddress(username,callback){
        let sql=`select * from address where username=?`;
        this.mysql.query(sql,[username],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,msg:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }
    setAddress(userinfo,callback){
        console.log(userinfo);
        let area=userinfo.area;
        let city=userinfo.city;
        let isdefault=userinfo.isdefault;
        let name=userinfo.name;
        let phone=userinfo.phone;
        let province=userinfo.province;
        let street=userinfo.street;
        let uid=userinfo.uid;
        let username=userinfo.username;
        let sql=`insert into address (area,city,isdefault,name,phone,province,street,uid,username) 
                values (?,?,?,?,?,?,?,?,?)`;
        this.mysql.query(sql,[area,city,isdefault,name,phone,province,street,uid,username],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,msg:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }
    getAllAddress(username,callback){
        let sql=`select * from address where username=?`;
        this.mysql.query(sql,[username],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,msg:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }
    delAddress(aid,callback){
        let sql=`delete from address where aid=?`;
        this.mysql.query(sql,[aid],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,msg:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }
    UpdateAddress(userinfo,callback){
        let area=userinfo.area;
        let city=userinfo.city;
        let isdefault=userinfo.isdefault;
        let name=userinfo.name;
        let phone=userinfo.phone;
        let province=userinfo.province;
        let street=userinfo.street;
        let aid=userinfo.aid;
        let uid=userinfo.uid;
        let username=userinfo.username;
        let sql=`update address set city=?,isdefault=?,name=?,phone=?,province=?,street=? where aid=${aid}`;
        this.mysql.query(sql,[city,isdefault,name,phone,province,street],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,msg:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }

    getCollection(uid,callback){
        let sql=`select * from products,(select * from collections where uid=${uid}) as coll 
                where products.pid=coll.pid;`;
        this.mysql.query(sql,[uid],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,msg:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }

    delCollect(pid,uid,callback){
        let sql=`delete from collections where pid=? and uid=?;`;
        this.mysql.query(sql,[pid,uid],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,msg:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }

    shopDetail(pid,callback){
        let sql=`select * from products where pid=?`;
        this.mysql.query(sql,[pid],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,msg:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }

    addCollect(uid,pid,kid,callback){
        let sql=`insert into collections (uid,pid,kid) values (?,?,?)`;
        this.mysql.query(sql,[uid,pid,kid],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,reqdata:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }

    addCart(uid,pid,num,callback){
        let sql=`insert into mycart (uid,pid,num) values (?,?,?);`;
        this.mysql.query(sql,[uid,pid,num],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,reqdata:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }

    getMyCart(uid,callback){
        let sql=`select * from products,(select * from mycart where uid=?) as cart 
                where cart.pid=products.pid;`;
        this.mysql.query(sql,[uid],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,reqdata:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }

    Login(username,pwd,callback){
        let sql=`select * from users where username=? and pwd=? and admin=0;`;
        this.mysql.query(sql,[username,pwd],function(err,results){
            if(err){
                console.log(err);
                callback({code:-1,reqdata:"数据获取失败！"});
                return;
            }
            callback({code:1,reqdata:results});
        });
    }
}
module.exports=userModel;