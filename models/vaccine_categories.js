const mongoose = require("mongoose");
const { Schema } = mongoose;

const vaccine_categorieShema = Schema({
  category_name: { type: String },
  subcategory_name: { type: Array, min: 0, max: 100 },
});

module.exports = mongoose.model("vaccine_categorie", vaccine_categorieShema);
