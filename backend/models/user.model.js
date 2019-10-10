var connection = require('../connection/mysql_db');

var User = (user) => {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
};

User.createUser = (newUser, response) => {
    let query = "INSERT INTO user SET ?";
    connection.query(query, [newUser], (err, results) => {
        if(err){
            response(err, null);
        } else {
            let userId = results.insertId;
            response(null, userId);
        }
        
    });
};

User.findUser = (userEmail, response) => {
    let query = "SELECT * FROM user WHERE email = ?";
    connection.query(query, userEmail, (err, result) => {
        if(err){
            console.log("inside moel" + err);
            response(err, null);
        } else {
            if(result.length==0 || !result){
                response("No results found", null);
            } else {
                const user = result[0];
                response(null, user);
            }
        }
    });
};

module.exports = User;

