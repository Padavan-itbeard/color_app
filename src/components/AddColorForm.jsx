// import React, { Component } from 'react'
import React, { useRef } from 'react';
import propTypes from 'prop-types';
import { css } from '@emotion/react';


const AddColorForm = ({ onNewColor = () => { } }) => {

  const title = useRef(null);
  const color = useRef(null);

  const submit = e => {
    e.preventDefault();

    let _title = title.current;
    let _color = color.current;

    onNewColor(_title.value, _color.value);
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  }

  return (
    <form onSubmit={submit}
      css={css`
          display: flex;
          justify-content: space-around;
          margin: 0.25em;
          button {
            margin: 0.25em;
          }
          input {
            margin: 0.25em;
            &:first-of-type {
              flex: 1;
            }
          }
      `}
    >
      <input ref={title} type="text" placeholder="color title..." required />
      <input ref={color} type="color" required />
      <button >ADD</button>
    </form >
  )
}

AddColorForm.propTypes = {
  onNewColor: propTypes.func,
}

export default AddColorForm;