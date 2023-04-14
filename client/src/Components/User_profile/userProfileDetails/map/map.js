import Map, { Marker } from "react-map-gl";
import img from "../../../Content/Home/image/map-marker.png";
import "mapbox-gl/dist/mapbox-gl.css";

const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Maap = ({ latlng, zoom, marker }) => {
  const markerStyle = {
    cursor: "pointer",
    width: "70px",
    height: "70px",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    zindex: 1,
  };

  return (
    <Map
      mapboxAccessToken={accessToken}
      interactive={true}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "12px",
      }}
      maxZoom={17}
      minZoom={1.2}
      initialViewState={{
        longitude: latlng[0] - 0.0005,
        latitude: latlng[1],
        zoom: zoom ? zoom : 15,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v12">
      <Marker
        latitude={marker ? marker[1] : latlng[1]}
        longitude={marker ? marker[0] : latlng[0]}>
        <div style={markerStyle} />
      </Marker>
    </Map>
  );
};

export default Maap;
