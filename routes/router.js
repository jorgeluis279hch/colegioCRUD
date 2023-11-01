const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();

const { connectToDatabase } = require("../db/database");

router.get("/", (req, res) => res.send("Home"));

router.get("/students", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("students");

  const listStudents = await collection.find().toArray();
  res.json(listStudents);
});

router.get("/:id", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("students");

  const student = await collection.findOne({
    _id: new ObjectId(req.params.id),
  }); // No es necesario usar ObjectId aquí

  res.json(student);
});

router.post("/student", async (req, res) => {
  const { stdName, age } = req.body;
  const db = await connectToDatabase();
  const collection = db.collection("students");

  const student = { stdName, age };
  const result = await collection.insertOne(student);

  res.json({ status: "Student Saved" });
});

router.put("/:id", async (req, res) => {
  const { stdName, age } = req.body;
  const newStudent = { stdName, age };

  const db = await connectToDatabase();
  const collection = db.collection("students");

  await collection.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: newStudent }
  );

  res.json({ status: "Student Updated" });
});

router.delete("/:id", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("students");

  await collection.deleteOne({ _id: new ObjectId(req.params.id) });

  res.json({ status: "Student Deleted" });
});

module.exports = router;
