import React from 'react'
import './Button.scss'

const Button = (props) => {
  const types = {
    base: {
      padding: '8px 16px',
      backgroundColor: '#9A05EB',
      borderRadius: '15px',
      fontSize: '12px',
      lineHeight: '22px',
      fontWeight: '500',
    },
    second: {
      padding: '8px 16px',
      backgroundColor: '#3C983A',
      borderRadius: '15px',
      fontSize: '12px',
      lineHeight: '22px',
      fontWeight: '500'
    },
    white: {
      padding: '10px 16px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: '500',
      color: '#9A05EB'
    },
    transparent: {
      backgroundColor: 'transparent',
      padding: '10px 16px',
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: '500',
      color: '#fff'
    }
  }

  const type = types[props.type];
  return (
    <button className={`button ${props.class}`}
      style = {type}>
        {props.icon ? <img src={props.icon}></img> : ''}
        <span>{props.text}</span>
    </button>
  )
}

export default Button