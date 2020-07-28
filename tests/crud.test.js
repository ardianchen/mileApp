import app from 'src/app'
import supertest from 'supertest'
import { database } from 'src/database'

const request = supertest(app)

const db = database('mongodb://localhost/db-test')

beforeAll(async () => {
  await db.connect()
})

afterAll(async () => {
  await db.clear()
  await db.close()
})

describe('GET /api/package', () => {
  test('respon get request', () => {
    return request.get('/api/package')
      .expect((response) => {
        expect(response.status).toBe(200)
      })
  })
})
describe('GET /api/package/id', () => {
  test('respon get detail request', () => {
    return request.get('/api/package/5f1fe465b62560723ea1b892')
      .expect((response) => {
        expect(response.status).toBe(200)
      })
  })
})

describe('POST /api/package', () => {
  test('transaction_id field is required', () => {
    return request.post('/api/package')
      .expect((response) => {
        expect(response.status).toBe(422)
        expect(response.body.errors.transaction_id[0]).toMatch(/required/)
      })
  })

  const payload = {
    transaction_id: 'd0090c40-539f-479a-8274-899b9970bddc',
    customer_name: 'PT. AMARA PRIMATIGA',
    koli_data: [{
      koli_length: 0,
      awb_url: 'https://tracking.mile.app/label/AWB00100209082020.1',
      created_at: '2020-07-15 11:11:13',
      koli_chargeable_weight: 9,
      koli_width: 0,
      koli_surcharge: [],
      koli_height: 0,
      updated_at: '2020-07-15 11:11:13',
      koli_description: 'V WARP',
      koli_formula_id: null,
      connote_id: 'f70670b1-c3ef-4caf-bc4f-eefa702092ed',
      koli_volume: 0,
      koli_weight: 9,
      koli_id: 'e2cb6d86-0bb9-409b-a1f0-389ed4f2df2d',
      koli_custom_field: {
        awb_sicepat: null,
        harga_barang: null
      },
      koli_code: 'AWB00100209082020.1'
    }],
    transaction_amount: '70700'
  }
  test('store success', () => {
    return request.post('/api/package')
      .send(payload)
      .expect((response) => {
        expect(response.status).toBe(201)
      })
  })
})
