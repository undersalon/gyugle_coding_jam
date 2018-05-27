import React from "react";
import {compose, withProps} from "recompose";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	StreetViewPanorama,
	OverlayView,
} from "react-google-maps";

const getPixelPositionOffset = (width, height) => ({
	x: -(width / 2),
	y: -(height / 2),
})

const StreetViewPanormaWithAnOverlayView = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBbdRNbGV0AhNmp0AGceSFW9sbtxoEb-FM&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{height: `100%`}} />,
		containerElement: <div style={{height: `500px`, width: `500px`}} />,
		mapElement: <div style={{height: `100%`}} />,
		center: {lat: 37.3604116, lng: 127.1139778}
	}),
	withScriptjs,
	withGoogleMap
)(props =>
	<GoogleMap defaultZoom={8} defaultCenter={props.center}>
		<StreetViewPanorama defaultPosition={props.center} visible>
			<OverlayView
				position={{lat: 37.3604116, lng: 127.1139778}}
				mapPaneName={OverlayView.OVERLAY_LAYER}
				getPixelPositionOffset={getPixelPositionOffset}
			>
				<div style={{background: `red`, color: `white`, padding: 5, borderRadius: `0%`}}>
					지하 1층 ⬇️⬇️
				</div>
			</OverlayView>
		</StreetViewPanorama>
	</GoogleMap>
);

export default StreetViewPanormaWithAnOverlayView;