const express = require("express");
const router = express.Router();

const urlController = require("../Controller/urlController");

router.route("/").get(urlController.getAllUrls).post(urlController.postNewUrl);

router
  .route("/:slug")
  .get(urlController.getAUrl)
  .patch(urlController.updateAUrl);

module.exports = router;
