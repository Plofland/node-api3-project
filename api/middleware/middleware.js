const postFunc = require('../posts/posts-model');

function logger(req, res, next) {
  console.log(
    `A ${req.method} request was made at ${new Date().toUTCString()} on ${
      req.originalUrl
    }`
  );
  next();
}

const validateUserId = async (req, res, next) => {
  const { id } = req.params;
  const userId = await postFunc.getById(id);
  try {
    if (!id) {
      res.status(400).json({ message: `No user with the id of ${id}` });
    } else {
      req.userId = userId;
      next();
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
}

function validateUser(req, res, next) {
  // do your magic!
  try {
    if (!req.body.text || !req.body.sender) {
      res.status(400).json({ message: `Please enter valid name or text` });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
}

function validatePost(req, res, next) {
  const name = req.body.name;
  const text = req.body.text;
  try {
    if (!name || !text) {
      res.status(400).json({ message: `No post with the id of ${id}` });
    } else {
      
      next();
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
}

// do not forget to expose these functions to other modules
module.exports = { logger, validateUserId, validateUser, validatePost };
