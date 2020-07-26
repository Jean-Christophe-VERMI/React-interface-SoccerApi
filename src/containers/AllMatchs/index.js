import { connect } from 'react-redux';

import AllMatchs from '../../components/AllMatchs';

const mapStateToProps = (state) => ({
  allMatchs: state.allCompetitions.allMatchs,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AllMatchs);