import { connect } from 'react-redux';

import SerieA from '../../components/SerieA';

const mapStateToProps = (state) => ({
  allMatchs: state.serieA.allMatchs,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SerieA);