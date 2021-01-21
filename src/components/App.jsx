import { Component } from 'react';
import { v4 } from 'uuid';
import propTypes from 'prop-types';
import ColorList from './ColorList';
import AddColorForm from './AddColorForm';
import '../style/app.css';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [...this.props.colors]
    }
    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    debugger
    this.setState({ colors })
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
      (color.id !== id) 
        ? color 
        : {
          ...color,
          rating
        }
    )
    this.setState({ colors })
  }

  removeColor(id) {
    const colors = this.state.colors.filter(
      color => color.id !== id
    )
    this.setState({ colors })
  }

  render() {
    const { addColor, rateColor, removeColor } = this
    const { colors } = this.state
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors}
          onRate={rateColor}
          onRemove={removeColor} />
      </div>
    )
  }
}

App.propTypes = {
  colors: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      color: propTypes.string,
      rating: propTypes.number,
    }),
  ),
}

App.defaultProps = {
  colors: []
}