import PropTypes from 'prop-types';
import '../style/stars.css';


const Star = ({ selected = false, onClick = () => { } }) => (
  <div className={ selected ? 'star selected' : 'star' }
    onClick={ onClick }
  >
  </div>
);

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Star;