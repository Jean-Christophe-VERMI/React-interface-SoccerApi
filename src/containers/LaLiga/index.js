import { connect } from 'react-redux';

import LaLiga from '../../components/LaLiga';

const mapStateToProps = (state) => ({
  allMatchs: state.laLiga.allMatchs,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LaLiga);