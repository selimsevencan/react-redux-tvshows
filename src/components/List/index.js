import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { Container, Row, Col } from 'react-grid-system';

// relative import
import { createFetchPopular } from '../../actions';
import ListItem from './ListItem';

class List extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(createFetchPopular());
  }
    
  render() {
    const { tvshows, loading } = this.props;

    return (
      <Container>
        <div className="List">
          { loading && tvshows.length === 0 &&
            (
              <div className="Loading">
                <CircularProgress size={120} thickness={5} />
              </div>
            )
          }
          <Row>
            {tvshows.map((tvshow, key) => (
              <Col key={key} lg={2} md={3} sm={4} xs={6}>
                <ListItem
                  permalink={tvshow.permalink}
                  image={tvshow.image_thumbnail_path}
                  network={tvshow.network}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    tvshows: state.list.data,
    loading: state.list.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
