import { connect } from 'react-redux';

import PremierLeague from '../../components/PremierLeague';

const mapStateToProps = (state) => ({
  allMatchs: state.premierLeague.allMatchs,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PremierLeague);