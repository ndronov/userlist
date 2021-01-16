import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(2),
  },
}))

const LoadUsersButton = ({ loadUsers }) => {
  const classes = useStyles()

  return (
    <Button
      onClick={loadUsers}
      color="primary"
      variant="contained"
      size="large"
      className={classes.button}
    >
      Load users
    </Button>
  )
}

LoadUsersButton.propTypes = {
  loadUsers: PropTypes.func.isRequired,
}

export default connect()(LoadUsersButton)
