import format from 'pg-format'
import db from '../database/db.js'

export const findAll = ({ limits = 10, order_by: orderBy = 'stock_ASC', page = 1 }) => {
  const query = 'SELECT * FROM inventario'
  console.log(query)
  const [column, sort] = orderBy.split('_')
  const offset = Math.abs(+page !== 0 ? page - 1 : 0) * limits
  const formattedQuery = format(`${query} ORDER BY %s %s LIMIT %s OFFSET %s;`, column, sort, limits, offset)
  return db(formattedQuery)
}

export const filterAll = ({ limits = 10, order_by: orderBy = 'id_ASC', page = 0, precio_min: precioMin, precio_max: precioMax, categoria, metal }) => {
  let query = 'SELECT * FROM inventario'
  const filtros = []
  const values = []

  if (precioMin) {
    values.push(precioMin)
    filtros.push(`precio >= $${values.length}`)
  }

  if (precioMax) {
    values.push(precioMax)
    filtros.push(`precio <= $${values.length}`)
  }

  if (categoria) {
    values.push(categoria)
    filtros.push(`categoria ILIKE $${values.length}`)
  }

  if (metal) {
    values.push(metal)
    filtros.push(`metal ILIKE $${values.length}`)
  }

  if (filtros.length > 0) {
    query += ` WHERE ${filtros.join(' AND ')}`
  }

  console.log('la query', query)

  const [column, sort] = orderBy.split('_')
  const offset = Math.abs(+page !== 0 ? page - 1 : 0) * limits
  const formattedQuery = format(`${query} ORDER BY %s %s LIMIT %s OFFSET %s;`, column, sort, limits, offset)
  console.log('formateado', formattedQuery)
  return db(formattedQuery, values)
}
