export const setUsers = users => ({
  type: 'SET_USERS',
  payload: users
})

export const selectAll = () => ({
  type: 'SELECT_ALL'
})

export const selectUser = userId => ({
  type: 'SELECT_USER',
  payload: userId
})

