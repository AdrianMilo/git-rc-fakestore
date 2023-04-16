export const getUsers = (req, res) => {
  res.status(404).json('No hay usuarios')
}

export const getUser = (req, res) => {

  const { id } = req.params

  res.json(`Usuario con la id ${ id }, retornado exitosamente`)
}

export const createUser = (req, res) => {
  const data = req.body

  res.status(201).json({
    message:`Usuario ${data.username} creado`
  })
}

export const updateUser = (req, res) => {
  res.json('Editar usuario')
}

export const deleteUser = (req, res) => {
  res.json('Eliminar usuario')
}
