const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrderstoClaim,
  getOrdersPast,
  getOrdersCurrent,
} = require("../controllers/orders");

const authenticate = require("../middlewares/auth");
router.use(authenticate);

router.get("/", getAllOrders);
router.get("/toclaim", getOrderstoClaim);
router.get("/pastorders", getOrdersPast);
router.get("/currentOrder", getOrdersCurrent);
router.get("/:id", getOrderById);
router.post("/", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
