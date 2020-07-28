import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
const Schema = mongoose.Schema

const koil = new Schema({
  koli_length: {
    type: String
  },
  awb_url: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  koli_chargeable_weight: {
    type: String
  },
  koli_width: {
    type: String
  },
  koli_surcharge: {
    type: String
  },
  koli_height: {
    type: String
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  koli_description: {
    type: String
  },
  koli_formula_id: {
    type: String
  },
  connote_id: {
    type: String
  },
  koli_volume: {
    type: String
  },
  koli_weight: {
    type: String
  },
  koli_id: {
    type: String
  },
  koli_custom_field: {
    type: String
  },
  koli_code: {
    type: String
  }
})

koil.plugin(mongoosePaginate)

export default mongoose.model('koil', koil)
