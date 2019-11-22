const express = require("express");
const Posts = require("./post-model");

const router = express.Router();






// router.get("/", async (request, response) => {
//     try{
//         const posts = await
// Posts.find(request.query);
// response.status(200).json(posts);
//     }
// catch (err) {
//     response.status(500).json({success:false,err})
// }

// });
  
router.get('/posts', async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get posts' });
  }
});

//     const  posts = req.body;






//   const post = await Posts.findPostsBy(posts);

//   try {
//     res.status(200).json(post);
//   } catch ({ err }) {
//     res.status(500).json({
//       err,
//       message: `Could not retrieve posts...`
//     });
//   }
// });

router.post("/new", async (req, res) => {
  const postData = req.body;
  const newPost = await Posts.addPost(postData);

  try {
    res.status(201).json({ message: "added new post.", newPost });
  } catch ({ err }) {
    res.status(500).json({ err, message: "Could not add new post." });
  }
});

router.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const change = req.body;

  try {
    const count = await Posts.updatePost(id, change);

    if (count) {
      res.json({ updated: count });
    } else {
      res
        .status(404)
        .json({ message: `Could not find Post with the given id of ${id}` });
    }
  } catch ({ err }) {
    res.status(500).json({ err, message: "Could not update Post." });
  }
});

router.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const count = await Posts.removePost(id);

    if (count) {
      res.json({ removed: count });
    } else {
      res
        .status(404)
        .json({ message: "Could not find Post with the given id" });
    }
  } catch ({ err }) {
    res.status(500).json({ err, message: "Could not delete Post" });
  }
});

module.exports = router;
