import fetch from 'node-fetch'

const { MELI_BASE_API } = process.env

const resolver = async parent => {
  const { id, title, category_id: catId } = parent
  const request = await fetch(`${MELI_BASE_API}/categories/${catId}`)
  const response = await request.json()

  return [
    ...response.path_from_root,
    {
      id,
      name: title,
    },
  ]
}

export default resolver
