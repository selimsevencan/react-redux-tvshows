import React, { Component } from 'react';
import { Link } from 'react-router';

import { Card, CardMedia, CardTitle} from 'material-ui/Card';

class ListItem extends Component {
  render() {
    const { permalink, image, network } = this.props;
    return (
      <div className="ListItem">
        <Link to={`/tvshows/${permalink}`} >
          <Card
            zDepth={5}
            style={{
              marginTop: '30px'
            }}
          >
            <CardMedia
              overlay={<CardTitle subtitle={network} />}
            >
              <img alt={permalink} src={image} height={240} />
            </CardMedia>
          </Card>
        </Link>
      </div>
    );
  }
}

export default ListItem;
