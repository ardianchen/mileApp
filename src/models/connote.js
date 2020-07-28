import mongoose from 'mongoose'
const Schema = mongoose.Schema

const connote = new Schema({
  connote_id: {
    type: String,
    require: true
  },
  connote_number: {
    type: String,
    require: true
  },
  connote_service: {
    type: String,
    require: true
  },
  connote_service_price: {
    type: String,
    require: true
  },
  connote_amount: {
    type: String,
    require: true
  },
  connote_code: {
    type: String,
    require: true
  },
  connote_booking_code: {
    type: String,
    require: true
  },
  connote_order: {
    type: String,
    require: true
  },
  connote_state: {
    type: String,
    require: true
  },
  connote_state_id: {
    type: String,
    require: true
  },
  zone_code_from: {
    type: String,
    require: true
  },
  zone_code_to: {
    type: String,
    require: true
  },
  surcharge_amount: {
    type: String,
    require: true
  },
  transaction_id: {
    type: String,
    require: true
  },
  actual_weight: {
    type: String,
    require: true
  },
  volume_weight: {
    type: String,
    require: true
  },
  chargeable_weight: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  organization_id: {
    type: String,
    require: true
  },
  location_id: {
    type: String,
    require: true
  },
  connote_total_package: {
    type: String,
    require: true
  },
  connote_surcharge_amount: {
    type: String,
    require: true
  },
  connote_sla_day: {
    type: String,
    require: true
  },
  location_name: {
    type: String,
    require: true
  },
  location_type: {
    type: String,
    require: true
  },
  source_tariff_db: {
    type: String,
    require: true
  },
  id_source_tariff: {
    type: String,
    require: true
  },
  pod: {
    type: String,
    require: true
  },
  history: {
    type: String,
    require: true
  }
})

export default mongoose.model('connote', connote)
