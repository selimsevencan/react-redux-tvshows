import React, { Component } from 'react';

import { Card, CardHeader, CardText, CardActions, CardMedia, CardTitle } from 'material-ui';
import { Container, Row, Col } from 'react-grid-system';

import Timelapse from 'material-ui/svg-icons/image/timelapse';

class TVShow extends Component {
  render() {
    const { selected } = this.props;
    return (
      <Container>
        <div className="TVShowItem">
          <Row>
            <Col sm={4}>
              <Card
                zDepth={5}
                style={{
                  marginTop: '30px'
                }}
              >
                <CardMedia>
                  <img alt={selected.name} src={selected.image_path} />
                </CardMedia>
              </Card>
            </Col>
            <Col sm={6}>
              <Card
                style={{
                  marginTop: '30px',
                  backgroundColor: 'black'
                }}
              >
                <CardHeader
                  title={selected.countdown.air_date}
                  subtitle="Next Episode Air Date"
                  avatar={<Timelapse />}
                />
                <CardTitle
                  title={selected.name}
                  subtitle={selected.genres.map((genre) => `${genre}, `)}
                />
                <CardText>
                  {selected.description}
                </CardText>
                <CardActions>
                </CardActions>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default TVShow;
