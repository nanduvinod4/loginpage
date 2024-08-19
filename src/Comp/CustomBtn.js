import React from 'react'
import "./CustomBtn.css"

function CustomBtn({label}) {

  return (
    <div className='container'>
    <button className='CustomBtn'>{label}</button>
    </div>
  )
}

export default CustomBtn