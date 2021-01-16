import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableFooter from '@material-ui/core/TableFooter'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles({
  tableHead: {
    background: '#cccccc',
  },
  tableFooter: {
    background: '#ededed',
  }
})

const UserList = ({ users, haveUsers, selectedUsersLabel, isAllSelected, selectUser, selectAll }) => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={isAllSelected}
                onClick={selectAll}
                disabled={!haveUsers}
                title={isAllSelected ? 'Снять выделение' : 'Выделить всё'}
              />
            </TableCell>
            <TableCell padding="none">First name</TableCell>
            <TableCell padding="none">Last name</TableCell>
            <TableCell padding="none">Age</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {!haveUsers && (
            <TableRow>
              <TableCell colSpan={4} align="center">
                User list is empty
              </TableCell>
            </TableRow>
          )}

          {haveUsers && users.map((user) => (
            <TableRow key={user.id}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={!!user.selected}
                  onChange={() => selectUser(user.id)}
                  title={user.selected ? 'Снять выделение' : 'Выделить'}
                />
              </TableCell>

              <TableCell padding="none">
                {user.firstName}
              </TableCell>

              <TableCell padding="none">
                {user.lastName}
              </TableCell>

              <TableCell padding="none">
                {user.age}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className={classes.tableFooter}>
          <TableRow>
            <TableCell colSpan={4}>
                Users: {selectedUsersLabel}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

UserList.propTypes = {
  selectUser: PropTypes.func.isRequired,
  selectAll: PropTypes.func.isRequired,
  isAllSelected: PropTypes.bool.isRequired,
  haveUsers: PropTypes.bool.isRequired,
  selectedUsersLabel: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired).isRequired,
}

export default UserList
