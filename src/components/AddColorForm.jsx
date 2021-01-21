// import React, { Component } from 'react'
import React, { useRef } from 'react'

// export default class AddColorForm extends Component {
//   constructor(props) {
//     super(props);

//     this._title = React.createRef();
//     this._color = React.createRef();

//     this.submit = this.submit.bind(this);
//   }

//   submit(e) {
//     e.preventDefault();

//     const { _title: { current: title }, _color: { current: color} } = this;
//     alert(`New Color ${ title.value } ${ color.value }`);
//     title.value = '';
//     color.value = '#000000';
//     title.focus();
//   }

//   render() {
//     return (
//       <form onSubmit={this.submit}>
//         <input ref={this._title} type="text" placeholder="color title..." required/>
//         <input ref={this._color} type="color" required/>
//         <button>ADD</button>
//       </form>
//     )
//   }
// }


const AddColorForm = ({ onNewColor = () => { } }) => {

  const title = useRef(null);
  const color = useRef(null);

  const submit = e => {
    e.preventDefault();

    let _title = title.current;
    let _color = color.current;

    onNewColor(_title, _color);
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  }

  return (
    <form onSubmit={submit}>
      <input ref={title} type="text" placeholder="color title..." required />
      <input ref={color} type="color" required />
      <button>ADD</button>
    </form>
  )
}

export default AddColorForm;