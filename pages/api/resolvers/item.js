import fetch from 'node-fetch'

const { MELI_BASE_API } = process.env

const resolver = async (_, args) => {
  const { id } = args
  const request = await fetch(`${MELI_BASE_API}/items/${id}`)
  const response = await request.json()

  return response
}

export default resolver
