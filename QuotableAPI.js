const axios = require('axios');
const uri = "http://api.quotable.io/random";
// API docs
// https://github.com/lukePeavey/quotable

module.exports = getData =()=>{
    return axios.get(uri).then(response=> response.data.content.split(" "));
}