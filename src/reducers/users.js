const users = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS': {
      return action.payload
    }

    case 'SELECT_ALL': {
      const isAllSelected = state.every(user => user.selected) && state.length > 0

      return state.map(user => ({
        ...user,
        selected: !isAllSelected,
      }))
    }

    case 'SELECT_USER': {
      return state.map(user => ({
        ...user,
        selected: user.id !== action.payload ? user.selected : !user.selected,
      }))
    }

    default: {
      return state
    }
  }
}

export default users
