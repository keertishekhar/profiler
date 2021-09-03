const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'profiler'
});
const table = 'users';
const insert = (data) => {
    let res = 'error';
    connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
        }
        console.log('connected as id ' + connection.threadId);
    });
    let query = createQuery(data, 'insert');
    if(query){
        query = `Insert INTO '${table}' ${query}`;
        console.log('query', query);

        console.log(query);
        try {
            res =  connection.query(query);
        } catch (error) {
            console.log("error", error);
        }
    }
    console.log('res', res);
    return res;
}
const fetch = (params) =>  {
    if(!params) {
        return ;
    }
    let conn = connection.connect();
    if(!conn) {
        console.log('error while connecting to database ', err);
    }
    let query = createQuery(params, 'fetch');
    if(query){
        query = `SELECT * FROM ${table} WHERE ${query}`;
       res =  connection.query(query);
       if(res && Array.isArray(res) && res['num_rows']){
           res = res['num_rows'];
       }
    }
    console.log(res)
    return res;
}
const createQuery = (data, queryType) => {
    let condition = '';
    console.log(Object.keys(data));
    if(data && Object.keys(data).length > 0) {
        Object.keys(data).forEach(el => {
            console.log(el);
            if(queryType == 'insert'){
                condition +=  ` ${el}=${data[el]},`
            }else{
                if(condition){
                    condition +=  `AND ${el}=${data[el]}`
                }else{
                    condition +=  `${el}=${data[el]}`
                }
            }
        });
    }
    return condition ;
}

module.exports = {
    insert,
    fetch
}