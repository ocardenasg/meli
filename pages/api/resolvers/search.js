import fetch from 'node-fetch'

const { MELI_BASE_API } = process.env

const resolver = async (_, args) => {
  const { limit, searchTerm } = args
  const request = await fetch(
    `${MELI_BASE_API}/sites/MLA/search?q=${searchTerm}&limit=${limit}`
  )
  const response = await request.json()

  return response
}

export default resolver
