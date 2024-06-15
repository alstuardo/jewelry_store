import * as sql from '../models/joyas.dao.js'
import HATEOAS from '../helpers/hateoas.js'

export const findAll = (req, res) => sql.findAll(req.query)
  .then((result) => res.status(200).json({ status: true, code: 200, message: HATEOAS(result) }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const filterAll = (req, res) => sql.filterAll(req.query)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const notFound = (_, res) => res.status(404).json({ status: false, code: 404, message: 'Page not found' })
