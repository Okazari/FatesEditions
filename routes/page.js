var express = require('express');
var router = express.Router();
var https = require("https");
var Page = require('../models/PageModel');

/************PAGES**********/
router.get('/', function(req, res, next) {
    Page.find(function(err, pages) {
            if (err)
                res.send(err);

            res.json(pages);
        });
});

module.exports = router;
