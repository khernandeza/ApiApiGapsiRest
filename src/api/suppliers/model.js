const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;
const fields = {
  proveedor: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 40,
  },
  direccion: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 40,
  },
  ciudad: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 40,
  },
  telefono: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 40,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 60,
  },
  pago: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 20,
  },
  dias: {
    type: String,
    default: '',
    trim: true,
    maxlenght: 255,
  },
};

const supplierSchema = new Schema(fields, {
  timestamps: true,
});

supplierSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('supplier', supplierSchema);
