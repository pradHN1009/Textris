import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower  = word.toLowerCase()
        return (lower[0].toUpperCase() + lower.slice(1))
    } 
    return (
        <div style={{height:"40px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
        </div>
  )
}
Alert.propTypes = {
    alert : PropTypes.object
}

Alert.defaultProps = {
    alert : null
}
