const db = require("../data/dbConfig");

module.exports = {
  addPost,
  findPostBy,
  findAllPostsByUser,
  findPostById,
  updatePost,
  removePost
};

function findPostBy(filter) {
  return db("posts").where(filter);
}

function findPostById(id) {
  return db("posts")
    .where({ id })
    .first();
}

function findAllPostsByUser(RegisteredUser_id) {
  return db("posts")
    .join("registerUsers", "registerUsers.id", "=", "posts.RegisteredUser_id")
    .select(
      "post.name",
      "post.title",
      "post.description",
      "post.imgUrl"
    )
    .where({ RegisteredUser_id });
}

async function addPost(post) {
  const [id] = await db("posts").insert(post);

  return findPostById(id);
}

function updatePost(id, newInfo) {
  return db("posts")
    .where({ id })
    .update(newInfo);
}

function removePost(id) {
  return db("posts")
    .where({ id })
    .del();
}
