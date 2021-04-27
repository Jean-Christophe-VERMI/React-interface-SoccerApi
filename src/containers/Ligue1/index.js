import { connect } from 'react-redux';

import Ligue1 from '../../components/Ligue1';

const mapStateToProps = (state) => ({
  allMatchs: state.ligue1.allMatchs,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Ligue1);