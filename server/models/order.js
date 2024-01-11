const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    pickupLocation: {
      type: String,
      required: [true, 'pickuplocation is required'],
    },
    dropLocation: {
      type: String,
      required: [true, 'droplocation is required'],
    },
    weight: {
      type: Number,
      min: 0,
      max: 10,
      required: [true, 'weight is required'],
    },
    height: {
      type: Number,
      min: 0,
      max: 20,
      required: [true, 'height is required'],
    },

    length: {
      type: Number,
      min: 0,
      max: 20,
      required: [true, 'length is required'],
    },
    width: {
      type: Number,
      min: 0,
      max: 20,
      required: [true, 'width is required'],
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'customerId is required'],
      ref: 'User',
    },
    instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    claimed: {
      type: Boolean,
      default: 'false',
      required: [true, 'claimed is required'],
    },
    price: { type: Number, required: [true, 'price is required'] },
    paid: {
      type: Boolean,
      default: 'false',
      required: ['paid is required'],
    },
    delivered: {
      type: Boolean,
      default: 'false',
      required: [true, 'delivered is required'],
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model('Order', orderSchema);
module.exports = model;
