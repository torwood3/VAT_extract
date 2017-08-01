import { connect } from 'react-redux';
import App from '../components/App.js';

function mapStateToProps(state) {
  // TODO
  return {
      files: state.pdf.files
  };
}

function mapDispatchToProps(dispatch) {
  // TODO
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
