
import status from 'http-status'
import * as paketService from '../../services/paket'
import r from '../../lib/resjson'

export const read = async (req, res) => {
  const { params, query } = req
  const data = await paketService.read({ params: params, query: query })
  const response = r(data.sc, data.msg, data.res, data.count)
  res.status(status.OK).json(response)
}

export const detail = async (req, res) => {
  const { params } = req
  const data = await paketService.detail({ params: params })
  const response = r(data.sc, data.msg, data.res)
  res.status(status.OK).json(response)
}

export const post = async (req, res) => {
  const { body } = req
  const data = await paketService.insert({ body: body })
  const response = r(data.sc, data.msg, data.res)
  res.status(status.CREATED).json(response)
}

export const update = async (req, res) => {
  const { params, body } = req
  const data = await paketService.update({ params: params, body: body })
  const response = r(data.sc, data.msg, data.res)
  res.status(status.CREATED).json(response)
}

export const remove = async (req, res) => {
  const { params } = req
  const data = await paketService.remove({ params: params })
  const response = r(data.sc, data.msg, data.res)
  res.status(status.CREATED).json(response)
}
