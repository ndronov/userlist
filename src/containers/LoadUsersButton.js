import { connect } from 'react-redux'
import LoadUsersButton from '../components/LoadUsersButton'
import { fetchUsers } from '../api'
import { setUsers } from '../actions'
import { mapUserData } from '../utils'

const loadUsers = async (dispatch) => {
  const users = await fetchUsers()
  const mappedUsers = users.map(mapUserData)

  dispatch(setUsers(mappedUsers))
}

const mapDispatchToProps = dispatch => ({
  loadUsers: () => loadUsers(dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(LoadUsersButton)
