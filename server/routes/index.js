var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET Contact US page. */
router.get('/contactus', function (req, res, next) {
    res.render('contactus', { title: 'Contact US' });
});
/* GET people page. */
router.get('/people', function (req, res, next) {
    res.render('people', { title: 'People Page' });
});
module.exports = router;

//# sourceMappingURL=index.js.map
