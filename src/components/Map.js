import React from "react"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const MyMapComponent = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBbdRNbGV0AhNmp0AGceSFW9sbtxoEb-FM",
		loadingElement: <div style={{height: `100%`}} />,
		containerElement: <div style={{height: `inherit`, width: `inherit`}} />,
		mapElement: <div style={{height: `100%`}} />,
	}),
	withGoogleMap
)((props) => {
	return (
		<GoogleMap
			defaultZoom={15}
			defaultCenter={{lat: 37.3604116, lng: 127.1139778}}
		>
			{props.isMarkerShown && <Marker position={{lat: 37.3604116, lng: 127.1139778}} onClick={props.onMarkerClick} />}
		</GoogleMap>
	);
});

class MyFancyComponent extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isMarkerShown: false,
		};

		this.delayedShowMarker = () => {
			setTimeout(() => {
				this.setState({isMarkerShown: true})
			}, 3000)
		}

		this.handleMarkerClick = () => {
			this.setState({isMarkerShown: false})
			this.delayedShowMarker()
		}
	}

	componentDidMount() {
		this.delayedShowMarker()
	}

	render() {
		return (
			<MyMapComponent
				isMarkerShown={this.state.isMarkerShown}
				onMarkerClick={this.handleMarkerClick}
			/>
		)
	}
}

export default MyFancyComponent;