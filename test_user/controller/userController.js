const { insert, fetch}  = require('../models/usersModel')


const insertUser = (data) => {
    let insertResonse = false;
    if(data){
       insertResponse = insert(data)
    }
    return insertResonse;
}

const fetchUser = (params) =>
{
    let fetchUserResponse  = false;
    if(params){
        fetchUserResponse  = fetch(params)
    }
    return fetchUserResponse;
}
module.exports ={
    insertUser,
    fetchUser
}