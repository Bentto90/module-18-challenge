const router = require('express').Router(); 
const apiRoutes = require('./api-routes');

router.use('/api',apiRoutes);

router.use((req, res) => {
    return res.send('<h1>Wrong Route!</h1>')
}
);

module.exports = router;

