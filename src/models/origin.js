import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
const Schema = mongoose.Schema

const origin = new Schema({
  customer_name: {
    type: String
  },
  customer_address: {
    type: String
  },
  customer_email: {
    type: String
  },
  customer_phone: {
    type: String
  },
  customer_address_detail: {
    type: String
  },
  customer_zip_code: {
    type: String
  },
  zone_code: {
    type: String
  },
  organization_id: {
    type: String
  },
  location_id: {
    type: String
  }
})

origin.plugin(mongoosePaginate)

export default mongoose.model('origin', origin)
