const router = require('express').Router();

const userRoutes = require('./userroutes');
const postRoutes = require('./postroutes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
