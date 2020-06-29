const axios = require("axios");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown")
const api = {
  getUser(username,response) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(function(res)  {
      console.log(res.data.email);
      console.log(res.data.avatar_url);
      fs.writeFile("./utils/README.md", generateMarkdown(res, response), function(err){
        if(err){
          return console.log("error")
        }
      })
    }).catch(function(error) {
      if (error) {
        console.log (error)
      } 
      else {
        console.log ("Success!")
      }
    })
  }
  
};

module.exports = api;


