const posts = require('../data/posts');

function index(req, res) {
    
    let filteredPosts = posts;

    if (req.query.tags){
        filteredPosts = posts.filter(post => {
            
           return post.tags.includes(req.query.tags);
        });
    }
    res.json(filteredPosts);
}

function show(req, res) {
    
    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post not found"
        });
    }
   
    res.json(post);
}

function store(req, res) {
    
}

function update(req, res) {
    
}

function patch(req, res) {
    
}

function destroy(req, res) {
    
    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    posts.splice(posts.indexOf(post), 1);

    res.sendStatus(204);

}

module.exports = { index, show, store, update, patch, destroy };