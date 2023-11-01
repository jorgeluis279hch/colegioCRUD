// studentSchema.js

const { ObjectId } = require("mongodb");

const studentSchema = {
  stdName: { type: String, required: true },
  age: { type: Number, required: false },
};

module.exports = studentSchema;
