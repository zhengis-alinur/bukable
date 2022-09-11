import React from 'react'
import './Button.scss'

const Button = (props) => {
  return (
    <button className={`button ${props.class}`}>
        {props.icon ? <img src={props.icon} alt=''></img> : ''}
        <span>{props.text}</span>
    </button>
  )
}

export default Button