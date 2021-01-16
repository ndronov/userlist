import { connect } from 'react-redux'
import UserList from '../components/UserList'
import { selectAll, selectUser } from '../actions'

const mapStateToProps = state => {
  const users = state
  const selectedUsers = users.filter(user => user.selected)

  const haveUsers = users.length > 0
  const haveSelectedUsers = selectedUsers.length > 0

  return {
    users,
    haveUsers,
    // "...которое будет показывать имена выбранных строк с пользователями через запятую..."
    // полагаю, что речь идёт об именах пользователей
    selectedUsersLabel: haveSelectedUsers ? selectedUsers.map(user => user.firstName).join(', ') : '—',
    isAllSelected: selectedUsers.length === users.length && haveUsers,
  }
}

const mapDispatchToProps = dispatch => ({
  selectUser: (id) => dispatch(selectUser(id)),
  selectAll: () => dispatch(selectAll()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList)
