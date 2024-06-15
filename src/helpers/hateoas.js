const HATEOAS = (inventario) => {
  const totalJoyas = inventario.length
  const stockTotal = inventario.reduce((accumulator, current) => {
    return accumulator + current.stock
  }, 0)
  const results = inventario.map((joya) => {
    return {

      name: joya.nombre,
      href: `/joyas/joya/${joya.id}`
    }
  })

  return { totalJoyas, stockTotal, results }
}

export default HATEOAS
