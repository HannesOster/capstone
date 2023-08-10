import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";

import * as Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LocationMarker from "./LocationMarker";
import { CustomerStock } from "../AddDeposit/styles";
import { renderToStaticMarkup } from "react-dom/server";
import CustomerNavigation from "../CustomerNavigation/CustomerNavigation";

const StyledMapContainer = styled(MapContainer)`
  height: 60rem;
  width: 100%;
  margin-top: 70px;
  z-index: 0;
`;

const StyledPopup = styled(Popup)`
  background-color: ${(props) => props.theme.third};
  z-index: 1005;
`;
function getColoredMarkerURL(color) {
  return `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`;
}
const markerShadowURL =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png";
const yellowMarker = new Leaflet.Icon({
  iconUrl: getColoredMarkerURL("yellow"),
  shadowUrl: markerShadowURL,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greenMarker = new Leaflet.Icon({
  iconUrl: getColoredMarkerURL("green"),
  shadowUrl: markerShadowURL,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const redMarker = new Leaflet.Icon({
  iconUrl: getColoredMarkerURL("red"),
  shadowUrl: markerShadowURL,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const blackMarker = new Leaflet.Icon({
  iconUrl: getColoredMarkerURL("black"),
  shadowUrl: markerShadowURL,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function createBoxCountIcon(boxCount) {
  return new Leaflet.divIcon({
    html: renderToStaticMarkup(
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: boxCount > 15 ? "#D31119" : "white",
          color: boxCount > 15 ? "white" : "black",
          fontSize: "12px",
          transform: "translate(1.3px,2px)",
          border: "1px solid black",
          pointerEvents: "none",
        }}
      >
        {boxCount}
      </div>
    ),
    iconSize: [0, 0],
    iconAnchor: [12, 41],
    interactive: false,
  });
}

export default function Map({ markers }) {
  return (
    <>
      <StyledMapContainer center={[51.455, 6.759]} zoom={9} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers?.map((marker) => {
          if (!marker.lat) {
            return null;
          }
          return (
            <>
              <Marker
                key={marker.id}
                position={[marker.lat, marker.long]}
                icon={
                  isNaN(marker.days)
                    ? blackMarker
                    : marker.days > 30
                    ? redMarker
                    : marker.days > 7
                    ? yellowMarker
                    : greenMarker
                }
              >
                <StyledPopup>
                  <h2>{marker.name}</h2>
                  <CustomerStock>Kisten: {marker.boxes}</CustomerStock>
                  <CustomerStock>
                    {isNaN(marker.days)
                      ? "Noch keine Lieferung"
                      : marker.days === 0
                      ? "Letzte Lieferung heute"
                      : marker.days === 1
                      ? `Letzte Lieferung gestern`
                      : `Letzte Lieferung vor ${marker.days} Tagen`}
                  </CustomerStock>
                  <CustomerNavigation customer={marker.customer} />
                </StyledPopup>
              </Marker>

              {marker.boxes > 0 && (
                <Marker
                  position={[marker.lat, marker.long]}
                  icon={createBoxCountIcon(marker.boxes)}
                />
              )}
            </>
          );
        })}
        <LocationMarker />
      </StyledMapContainer>
    </>
  );
}
