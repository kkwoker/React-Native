import { connect } from 'react-redux';
import { toggleText } from '../../actions/blink';
import Blink from '../Blink';

const mapStateToProps = (state) => {
  return {
    showText: state.showText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleText: () => dispatch(toggleText())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blink);
