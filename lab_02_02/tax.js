const express = require("express");
const router = express.Router();

const calculateTax = (tax, amount) => {
  const taxAmount = (tax / 100) * amount;
  const income = amount - taxAmount;
  return { taxAmount, income };
};

// http://localhost:4500/podatek
router.post("/", (req, res) => {
  const { tax, amount } = req.body;
  const result = calculateTax(tax, amount);

  res.send(result);
});

module.exports = router;
