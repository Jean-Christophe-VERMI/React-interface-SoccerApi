import { connect } from 'react-redux';

import App from '../../components/App';

import { dispatchAllMatchs, dispatchPremierLeague, dispatchLaLiga, dispatchSeriea } from '../../actions/competitions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({

  dispatchAllMatchs: (allMatchs) => {
    dispatch(dispatchAllMatchs(allMatchs));
  },
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

export default connect(mapStateToProps, mapDispatchToProps)(App);