// import mongoose
const mongoose = require("mongoose");

// create the document plan
const customerSchema = mongoose.Schema({
  customerId: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true}
});

// export the model for use in creating documents
module.exports = mongoose.model("Customers", customerSchema);