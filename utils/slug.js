const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Generate a random NUM sized slug
module.exports.generateSlug = (NUM = 6) => {
  let slug = "";
  for (let i = 0; i < NUM; i++) {
    let num = (Math.random() * (char.length - 1)).toFixed(0);
    slug += char[num];
  }
  return slug;
};
