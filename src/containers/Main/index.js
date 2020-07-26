import { connect } from 'react-redux';

import Main from '../../components/Main';

import { dispatchPremierLeague, dispatchLaLiga, dispatchSeriea } from '../../actions/competitions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  dispatchPremierLeague: (matchsPremierLeague) => {
    dispatch(dispatchPremierLeague(matchsPremierLeague));
  },
  dispatchLaLiga: (matchsLaLiga) => {
    dispatch(dispatchLaLiga(matchsLaLiga));
  },
  dispatchSeriea: (matchsSeriea) => {
    dispatch(dispatchSeriea(matchsSeriea));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);