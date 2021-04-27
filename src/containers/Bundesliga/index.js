import { connect } from 'react-redux';

import Bundesliga from '../../components/Bundesliga';

const mapStateToProps = (state) => ({
  allMatchs: state.bundesliga.allMatchs,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Bundesliga);