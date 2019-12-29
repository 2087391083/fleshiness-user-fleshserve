const dbBase = require("../dbBase");
class shopModel extends dbBase {
    constructor() {
        super();
        this.table = "products";
    }
    getNewInfo(kid,page, limit1, callback) {
        let sql = `select * from ${this.table} where kid=${kid} order by addtime DESC limit ${(page - 1) * limit1},${limit1};
                select count(*) as numcount from ${this.table} where kid=${kid}`;
        this.mysql.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                callback(err);
                return;
            }
            callback(result);
        });
    }
    getPriceInfo(kid,page, limit1, callback) {
        let sql = `select * from ${this.table} where kid=${kid} order by price DESC limit ${(page - 1) * limit1},${limit1};
                select count(*) as numcount from ${this.table} where kid=${kid}`;
        this.mysql.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                callback(err);
                return;
            }
            callback(result);
        });
    }
    getRecommendInfo(kid,page, limit1, callback) {
        let sql = `SELECT * from products,collections where products.pid=collections.pid and products.kid=${kid} limit ${(page - 1) * limit1},${limit1};
                SELECT count(*) as numcount from products,collections where products.pid=collections.pid and products.kid=${kid}`;
        this.mysql.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                callback(err);
                return;
            }
            callback(result);
        });
    }

    getSearchProduct(pname,page,limit1,callback){
        let sql=`select * from products where pname like "%${pname}%" limit ${(page - 1) * limit1},${limit1};
                select count(*) as numcount from products where pname like "%${pname}%";`;
        this.mysql.query(sql,function(err,result){
            if(err){
                console.log(err);
                callback(err);
                return;
            }
            callback(result);
        }); 
    }

    getAllProduct(page, limit1, callback){
        let sql=`select * from products order by addtime DESC limit ${(page - 1) * limit1},${limit1};
                select count(*) as numcount from products;`;
        this.mysql.query(sql,function(err,result){
            if(err){
                console.log(err);
                callback(err);
                return;
            }
            callback(result);
        });
    }
}

module.exports = shopModel;
