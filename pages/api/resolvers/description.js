import fetch from 'node-fetch'

const { MELI_BASE_API } = process.env

const resolver = async parent => {
  const { id } = parent
  const request = await fetch(`${MELI_BASE_API}/items/${id}/description`)
  const response = await request.json()
  return response.plain_text
}

export default resolver
