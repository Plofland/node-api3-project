const postFunc = require('../posts/posts-model');
const userFunc = require('../users/users-model');

function logger(req, res, next) {
  console.log(
    `A ${
      req.method
    } request was made at ${new Date().toUTCString()} on ${
      req.originalUrl
    }`
  );
  next();
}

const validateUserId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const userId = await postFunc.getById(id);
    if (!userId) {
      res
        .status(400)
        .json({ message: `No user with the id of ${id}` });
      // console.log(userId);
    } else {
      req.userId = userId;
      // console.log(userId);
      next();
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};

function validateUser(req, res, next) {
  const { name } = req.body;
  try {
    if (!name) {
      res
        .status(400)
        .json({ message: `Please enter valid name` });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
}

const validatePostId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const postId = await postFunc.getById(id);
    if (!postId) {
      res
        .status(400)
        .json({ message: `No user with the id of ${id}` });
      // console.log(postId);
    } else {
      req.postId = postId;
      console.log(postId);
      next();
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
};

function validatePost(req, res, next) {
  const { name, text } = req.body;
  // const text = req.body.text;
  // const name = req.body.name;
  try {
    if (!name || !text) {
      res.status(400).json({
        message: `Please enter valid name or text`
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json(`Server error: ${error}`);
  }
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
  validatePostId
};
