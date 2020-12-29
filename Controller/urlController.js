const Url = require("../models/urlModel");
const { generateSlug } = require("../utils/slug");

const catchAsync = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((err) => {
      res.status(400).json({
        status: "failed",
        data: err.message,
      });
    });
  };
};

module.exports.getAllUrls = catchAsync(async (req, res, next) => {
  const data = await Url.find();

  res.status(200).json({
    status: "success",
    data,
  });
});

module.exports.postNewUrl = catchAsync(async (req, res, next) => {
  let slug = generateSlug();

  while (await Url.findOne({ slug })) {
    slug = generateSlug();
    console.log(slug);
  }

  const data = await Url.create({
    slug,
    url: req.body.url,
  });

  res.status(201).json({
    status: "success",
    data,
  });
});

module.exports.getAUrl = catchAsync(async (req, res, next) => {
  const data = await Url.findOne({ slug: req.params.slug });

  if (data) {
    res.status(200).json({
      status: "success",
      data,
    });
  } else {
    res.status(404).json({
      status: "failed",
      data: "Couldn't find url with specified slug",
    });
  }
});

module.exports.updateAUrl = catchAsync(async (req, res, next) => {
  const data = await Url.findOneAndUpdate(
    { slug: req.params.slug },
    {
      url: req.body.url,
    },
    {
      runValidators: true,
      new: true, // returns the new document
      // returnOriginal: true, // returns the original document
    }
  );
  res.status(200).json({
    status: "success",
    data,
  });
});
