import React, { Component } from 'react';
import { connect } from 'react-redux';

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setCoordinates: {lat: 38.5, lng: -96},
      zoomProperty: 14
    }

  }

  componentWillMount() {
    this.componentDidUpdate();
  }

  componentDidMount() {
    global.map = new google.maps.Map(this.refs.map, {
      zoom: this.state.zoomProperty,
      center: {
        lat: this.state.setCoordinates.lat,
        lng: this.state.setCoordinates.lng
      }
    });

    var marker = new google.maps.Marker({
      position: this.state.setCoordinates,
      animation: google.maps.Animation.DROP,
      map: map,
      title: 'Hello World!'
    });

    var radius = 1000;
    var circle = new google.maps.Circle({
      strokeColor: '#DDDDDD',
      strokeOpacity: .4,
      strokeWeight: 0.5,
      fillColor: '#939393',
      fillOpacity: 0.2,
      map: map,
      center: this.state.setCoordinates,
      radius: radius
    });


    console.log('Set Coordinates', this.state.setCoordinates);
    console.log('Set Zoom', this.state.zoomProperty);
  }

  componentWillReceiveProps(nextProps) {
    var context = this;

    if (nextProps.zoomSetting) {
      if (nextProps.zoomSetting.zoom !== context.state.zoomProperty) {
        context.setState( {zoomProperty: nextProps.zoomSetting.zoom
    }, () => {
        context.componentDidMount();
        });
      }
    }
    if (nextProps.defaultCoordinate) {
    console.log('nextProps', nextProps);
    console.log('UPDATE DEFAULT COORDINATES****', nextProps.defaultCoordinate.lat);
    if (nextProps && parseFloat(nextProps.defaultCoordinate.lat) !== this.state.setCoordinates.lat) {
      context.setState( {setCoordinates: {
        lat: parseFloat(nextProps.defaultCoordinate.lat),
        lng: parseFloat(nextProps.defaultCoordinate.lng)
      }
    }, () => {
          console.log('AFTER UPDATE', context.state.setCoordinates);
          context.componentDidMount();
        });
      }
    }
  }

  componentDidUpdate() {
    const context = this;
    console.log('GOOGLE MAP COMPONENT UPDATED');
    if (!this.props.defaultCoordinate || this.props.defaultCoordinate.load === true) {
      context.updateSetCoordinates();
    }
  }

  updateSetCoordinates() {
    var context = this;
    if (this.props.activeNeighborhood) {
    if (parseFloat(this.props.activeNeighborhood.latitude) !== this.state.setCoordinates.lat && parseFloat(this.props.activeNeighborhood.longitude) !== this.state.setCoordinates.lng) {
      context.setState( { setCoordinates : {
        lat: parseFloat(context.props.activeNeighborhood.latitude),
        lng: parseFloat(context.props.activeNeighborhood.longitude)
          }
        }, () => {
          context.componentDidMount();
        });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="img-responsive" style={{height: "400px", width:"1140px"}} ref="map"></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeNeighborhood: state.activeNeighborhood,
    defaultCoordinate: state.defaultCoordinate,
    zoomSetting: state.zoomSetting,
    amenitiesCoordinates: state.amenitiesCoordinates
  };
}

export default connect(mapStateToProps)(GoogleMap);
