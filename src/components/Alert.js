import React from 'react'

export default function Alert(props) {
    const capitalizer = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capitalizer(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}
