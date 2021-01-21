import propTypes from 'prop-types';
import StarRating from './StarRating';
import { css } from '@emotion/react';


const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f }) =>
  <section 
    css={css`
      flex-basis: calc(25% - 2px - 0.5em);
      @media screen and (max-width: 1200px) {
        flex-basis: calc(33.3334% - 2px - 0.5em);
      }
      @media screen and (max-width: 800px) {
        flex-basis: calc(50% - 2px - 0.5em);
      }
      @media screen and (max-width: 500px) {
        flex-basis: calc(100% - 2px - 0.5em);
      }
      margin: 0.25em;
      border: 1px solid #ededed;
      h1 {
        margin: 10px;
        text-align: center;
      }
    `}
  >
    <div
      css={css`
        position: relative;
      `}
    >
      <h1>{title}</h1>
      <button
        css={css`
          position: absolute;
          right: 0.25em;
          top: 0.25em;
          color: #c00;
        `}
        onClick={onRemove}
      >X</button>
    </div>
    <div style={{ height: 50, backgroundColor: color }} />
    <StarRating 
      starsSelected={rating} 
      onRate={onRate} 
    />
  </section>


Color.propTypes = {
  title: propTypes.string,
  color: propTypes.string,
  rating: propTypes.number,
  onRate: propTypes.func,
  onRemove: propTypes.func,
}

export default Color;