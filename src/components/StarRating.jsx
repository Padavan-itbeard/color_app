import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import { css } from '@emotion/react';

export default class StarRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starsSelected: 0,
    }

    this.change = this.change.bind(this);
  }

  change(starsSelected) {
    this.setState({ starsSelected });
  }

  render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;

    return (
      <div 
      css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.5em;
      p {
        margin: 0;
      }
    `}
      >
        <div>
          {
            [...Array(totalStars)].map((n, i) =>
              <Star key={i}
                selected={i < starsSelected}
                onClick={() => this.change(i + 1)}
              />
            )
          }
        </div>
        <p>
          {starsSelected} of {totalStars} stars
        </p>
      </div>
    )
  }
}

StarRating.propTypes = {
  totalStars: PropTypes.number,
}

StarRating.defaultProps = {
  totalStars: 5,
}