import propTypes from 'prop-types';
import Color from './Color';
import { css } from '@emotion/react';


const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) =>
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {(colors.length === 0)
      ? <p>No Colors Listed. (Add a Color)</p>
      : colors.map(color =>
        <Color key={color.id}
          {...color}
          onRate={(rating) => onRate(color.id, rating)}
          onRemove={() => onRemove(color.id)} />
      )
    }
  </div>

ColorList.propTypes = {
  onRate: propTypes.func,
  onRemove: propTypes.func,
  colors: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      color: propTypes.string,
      rating: propTypes.number,
    }),
  ),
}

export default ColorList;