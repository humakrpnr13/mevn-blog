const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
router.get('/:id', postController.getPost, postController.getPostById);
router.put('/:id', postController.getPost, postController.updatePost);
router.delete('/:id', postController.getPost, postController.deletePost);

module.exports = router;