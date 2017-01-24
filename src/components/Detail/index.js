import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui';

// relative import
import { createFetchTVShow } from '../../actions/tvshow';
import TVShow from './TVShow';

class Detail extends Component {
  componentWillMount() {
    const tvshow = this.props.params.tvshow;
    const { details, dispatch } = this.props;
    if (!details[tvshow]) {
      dispatch(createFetchTVShow(tvshow));
    }
  }

  render() {
    const tvshow = this.props.params.tvshow;
    const { loading, details } = this.props;
    const selected = details[tvshow];
    return (
      <div className="Detail">
        { loading && !selected &&
          (
            <div className="Loading">
              <CircularProgress size={120} thickness={5} />
            </div>
          )
        }
        { selected && (
          <TVShow selected={selected} />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    details: state.details.data,
    loading: state.details.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);