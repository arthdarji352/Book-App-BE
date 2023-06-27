const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksContoller = require("../contollers/books-controller");

router.get("/", booksContoller.getAllBooks);
router.post("/", booksContoller.addBook);
router.get("/:id", booksContoller.getbyId);
router.put("/:id", booksContoller.updateBook);
router.delete("/:id", booksContoller.deleteBook);

module.exports = router;
