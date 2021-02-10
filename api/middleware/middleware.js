const postFunc = require('../posts/posts-model')

function logger(req, res, next) {
  console.log(`A ${req.method} request was made at ${Date().toLocalString} on ${req.originalUrl}`);
  next();
}

function validateUserId(req, res, next) {
  const {id} = req.params;
  const postId = postFunc.getById(id);
  try {
    if(!id){
      res.status(400).json({message: `No post with the id of ${id}`})
    } else {
      req.postId = postId;
      next();
    }
  } catch (error) {
    res.status(500).json({`Server error: ${error}`})
  }

}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

// do not forget to expose these functions to other modules
module.exports = { logger, validateUserId, validateUser, validatePost };
