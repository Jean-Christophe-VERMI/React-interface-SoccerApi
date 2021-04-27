import { connect } from 'react-redux';

import App from '../../components/App';

import { 
  dispatchAllMatchs, 
  dispatchPremierLeague, 
  dispatchLaLiga, 
  dispatchSeriea, 
  dispatchLigue1,
  dispatchBundesliga,
 } from '../../actions/competitions';

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
  },
  dispatchLigue1: (matchsLigue1) => {
    dispatch(dispatchLigue1(matchsLigue1));
  },
  dispatchBundesliga: (matchsBundesliga) => {
    dispatch(dispatchBundesliga(matchsBundesliga));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);