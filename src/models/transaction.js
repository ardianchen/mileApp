import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
const Schema = mongoose.Schema

const trans = new Schema({
  transaction_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  customer_name: {
    type: String
  },
  customer_code: {
    type: String
  },
  transaction_amount: {
    type: String
  },
  transaction_discount: {
    type: String
  },
  transaction_additional_field: {
    type: String
  },
  transaction_payment_type: {
    type: String
  },
  transaction_state: {
    type: String
  },
  transaction_code: {
    type: String
  },
  transaction_order: {
    type: String
  },
  location_id: {
    type: String
  },
  organization_id: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  transaction_payment_type_name: {
    type: String,
    enum: {
      values: ['invoice', 'billing']
    },
    default: 'invoice'
  },
  transaction_cash_amount: {
    type: String
  },
  transaction_cash_change: {
    type: String
  },
  customer_attribute: {
    type: String
  }
})

trans.plugin(mongoosePaginate)

export default mongoose.model('transaction', trans)
