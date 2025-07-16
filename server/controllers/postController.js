
const Post = require('../models/Post');

async function getPost(req, res, next) {
    let post;
    try {
        post = await Post.findById(req.params.id);
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.post = post; // Attach the found post to the response object
    next(); // Move to the next middleware/route handler
}

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }); // Sort by creation date, newest first
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPostById = (req, res) => {
    res.status(200).json(res.post);
};

exports.createPost = async (req, res) => {
    const { title, content, author, tags, category } = req.body;
    const newPost = new Post({ title, content, author, tags, category });

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        // Recommended: Use error.message for consistency
        res.status(500).json({ message: error.message });
    }
};

exports.updatePost = async (req, res) => {
    if (req.body.title != null) {
        res.post.title = req.body.title;
    }
    if (req.body.content != null) {
        res.post.content = req.body.content;
    }
    if (req.body.author != null) {
        res.post.author = req.body.author;
    }
    if (req.body.tags != null) {
        res.post.tags = req.body.tags;
    }
    if (req.body.category != null) {
        res.post.category = req.body.category;
    }
    res.post.updatedAt = Date.now();

    try {
        const updatedPost = await res.post.save();
        res.status(200).json(updatedPost);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        await res.post.deleteOne(); 
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPost = getPost;