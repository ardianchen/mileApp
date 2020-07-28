import {
  find,
  findOne,
  create,
  edit,
  del
} from '../../repositories/paket'

export const read = async (payload = {}) => {
  let {
    pagenum = 1,
    limit = 10,
    sort = 'created_at',
    dir = 'DESC'
  } = payload.query
  pagenum = Number(pagenum)
  const end = Number(limit)
  const start = (pagenum - 1) * end
  const data = await find({
    start: start,
    pagenum: pagenum,
    end: end,
    sort: sort,
    dir: dir
  })
  return {
    sc: 20,
    msg: data.total > 0 ? 'found' : 'not found',
    res: data.docs,
    count: data.total
  }
}

export const detail = async (payload = {}) => {
  return { sc: 20, msg: 'success', res: await findOne({ id: payload.params.id }) !== null ? await findOne({ id: payload.params.id }) : {} }
}

export const insert = async (payload = {}) => {
  const sc = 21
  const msg = 'success'
  await create(payload.body)
  return { sc: sc, msg: msg }
}

export const update = async (payload = {}) => {
  const sc = 21
  const msg = 'success'
  await edit({
    id: payload.params.id,
    body: payload.body
  })
  return { sc: sc, msg: msg }
}
export const remove = async (payload = {}) => {
  const sc = 21
  const msg = 'success'
  await del({
    id: payload.params.id,
    body: payload.body
  })
  return { sc: sc, msg: msg }
}
