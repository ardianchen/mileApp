import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
const Schema = mongoose.Schema

const paketid = new Schema({
  transaction_id: {
    type: String,
    require: true
    // type: Schema.Types.ObjectId
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
    type: Number
  },
  location_id: {
    type: String
  },
  organization_id: {
    type: Number
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
      values: ['Invoice', 'Billing']
    },
    default: 'Invoice'
  },
  transaction_cash_amount: {
    type: Number
  },
  transaction_cash_change: {
    type: Number
  },
  customer_attribute: {
    Nama_Sales: String,
    TOP: String,
    Jenis_Pelanggan: String

  },
  connote: {
    connote_id: {
      type: String,
      require: true
    },
    connote_number: {
      type: Number,
      require: true
    },
    connote_service: {
      type: String,
      require: true
    },
    connote_service_price: {
      type: Number,
      require: true
    },
    connote_amount: {
      type: Number,
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
      type: Number,
      require: true
    },
    connote_state: {
      type: String,
      require: true
    },
    connote_state_id: {
      type: Number,
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
      type: Number,
      require: true
    },
    volume_weight: {
      type: Number,
      require: true
    },
    chargeable_weight: {
      type: Number,
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
      type: Number,
      require: true
    },
    pod: {
      type: String,
      require: true
    },
    history: []
  },
  connote_id: {
    type: String
  },
  origin_data: {
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
      type: Number
    },
    location_id: {
      type: String
    }
  },
  destination_data: {
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
      type: Number
    },
    location_id: {
      type: String
    }
  },
  koli_data: [{
    koli_length: {
      type: Number
    },
    awb_url: {
      type: String
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    koli_chargeable_weight: {
      type: Number
    },
    koli_width: {
      type: Number
    },
    koli_surcharge: [],
    koli_height: {
      type: Number
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
      type: Number
    },
    koli_weight: {
      type: Number
    },
    koli_id: {
      type: String
    },
    koli_custom_field: {
      awb_sicepat: { type: String },
      harga_barang: { type: String }
    },
    koli_code: {
      type: String
    }
  }],
  custom_field: {
    catatan_tambahan: { type: String }
  },
  currentLocation: {
    name: { type: String },
    code: { type: String },
    type: { type: String }
  }
})

paketid.plugin(mongoosePaginate)

export default mongoose.model('paketid', paketid)
