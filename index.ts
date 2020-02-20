const express = require('express')
const router = express()
const port = 4545;
 
//Router 
router.route('/movie')
    .get(function (req, res) {
        res.send('Get a movie')
    })
    .post(function (req, res) {
        res.send('Movie has been added')
    })
    .put(function (req, res) {
        res.send('Movie has been updated')
    })
    .delete(function (req,res){
        res.send("Movie has been deleted")
    })

router.listen(port, () => console.log(`Server has been listen on port: ${port}`));