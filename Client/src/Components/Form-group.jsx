import React from 'react'

const Form_group = ({username,type,placeholder}) => {
  return (
    <div className="form-group">

      <label htmlFor="" >
            {username}
      </label>
      <input type={type} placeholder={placeholder} />
      </div>
  )
}

export default Form_group;
