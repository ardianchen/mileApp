import {
  paket
} from '../../models'

export const find = async (payload = {}) => {
  const query = {
    // transaction_id: payload.transID
  }
  const data = await paket.paginate(
    query,
    {
      // select: [],
      sort: { 'payload.sort': payload.dir },
      limit: payload.end,
      offset: payload.start
    }
  )
  return data
}
export const create = async (payload = {}) => {
  const data = await paket.create(payload)
  return data
}

export const edit = async (payload = {}) => {
  const data = await paket.updateOne({
    _id: payload.id
  }, {
    $set: payload.body
  })
  return data[0]
}
export const del = async (payload = {}) => {
  const data = await paket.findByIdAndRemove({
    _id: payload.id
  })
  return data[0]
}
export const findOne = async (payload = {}) => {
  return await paket.findOne({
    _id: payload.id
  })
}
