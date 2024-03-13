const Order = require('../models/order');

const createOrder = async (req, res) => {
  try {
    //req.user._id come from the auth middleware
    const newOrder = await Order.create({
      ...req.body,
      customerId: req.user._id,
    });
    console.log('🚀 ~ file: orders.js:6 ~ createOrder ~ newOrder:', newOrder);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getAllOrders = async (req, res) => {
  try {
    // find related order based on customer or instructor Id

    const orders = await Order.find({
      $or: [{ customerId: req.user._id }, { instructorId: req.user._id }],
    })
      .populate({
        path: 'customerId',
        select: 'username',
      })
      .populate({
        path: 'instructorId',
        select: 'username',
      });

    console.log('🚀 ~ file: orders.js:15 ~ getAllOrders ~ orders:', orders);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getOrderById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // await Order.findById(id)
    const orders = await Order.find({ _id: id })
      .populate({
        path: 'customerId',
        select: 'username',
      })
      .populate({
        path: 'instructorId',
        select: 'username',
      });
    //   customerId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: [true, "customerId is required"],
    //     ref: "User",
    //   },
    //   instructorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    //   },

    if (orders.length === 0) {
      res.status(404).json({ message: 'Order Not Found' });
    }
    res.json(orders[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    // const updatedOrder = await Order.findByIdAndUpdate()
    const updatedOrder = await Order.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    console.log(
      '🚀 ~ file: orders.js:46 ~ updateOrder ~ updatedOrder:',
      updatedOrder
    );
    if (!updatedOrder) {
      res.status(404).json({ message: 'Order Not Found' });
    }
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // const deletedOrder = await Order.findByIdAndDelete()
    const deletedOrder = await Order.findOneAndDelete({ _id: id });
    console.log(
      '🚀 ~ file: orders.js:62 ~ deleteOrder ~ deletedOrder:',
      deletedOrder
    );
    if (!deletedOrder) {
      res.status(404).json({ message: 'Order Not Found' });
    }
    res.json(deletedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrdersPast = async (req, res) => {
  try {
    // find related order based on customer or instructor Id

    const orders = await Order.find({
      $and: [
        { $or: [{ customerId: req.user._id }, { instructorId: req.user._id }] },
        { delivered: true },
      ],
    })
      .populate({
        path: 'customerId',
        select: 'username',
      })
      .populate({
        path: 'instructorId',
        select: 'username',
      });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getOrderstoClaim = async (req, res) => {
  try {
    // find related order based on customer or instructor Id

    const orders = await Order.find({
      $and: [{ paid: true }, { claimed: false }],
    })
      .populate({
        path: 'customerId',
        select: 'username',
      })
      .populate({
        path: 'instructorId',
        select: 'username',
      });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

const getOrdersCurrent = async (req, res) => {
  try {
    // find related order based on customer or instructor Id

    const orders = await Order.find({
      $and: [
        { $or: [{ customerId: req.user._id }, { instructorId: req.user._id }] },
        { delivered: false },
      ],
    })
      .populate({
        path: 'customerId',
        select: 'username',
      })
      .populate({
        path: 'instructorId',
        select: 'username',
      });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrderstoClaim,
  getOrdersPast,
  getOrdersCurrent,
};
