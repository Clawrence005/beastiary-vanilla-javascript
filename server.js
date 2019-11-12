var express = require("express");
var router = express();

var PORT = process.env.PORT || 3000;

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

require("./routes/apiRoutes")(router);
require("./routes/htmlRoutes")(router);

router.listen(PORT, function () {
  console.log(`App listening on PORT: ${PORT}`)
})
