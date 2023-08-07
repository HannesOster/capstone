import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LocationMarker from "./LocationMarker";
import { CustomerStock } from "../AddDeposit/styles";
import { IconContext } from "react-icons";
import {
  PiCellSignalFullFill,
  PiCellSignalHighFill,
  PiCellSignalMediumFill,
  PiCellSignalLowFill,
} from "react-icons/pi";
import { renderToStaticMarkup } from "react-dom/server";
import CustomerNavigation from "../CustomerNavigation/CustomerNavigation";

const StyledMapContainer = styled(MapContainer)`
  height: 45rem;
  width: 100%;
  margin-top: 90px;
  z-index: 0;
`;
const StyledLegend = styled.div`
  position: fixed;
  top: 5px;
  right: 20px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 2000;
  font-size: 12px;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const StyledPopup = styled(Popup)`
  background-color: ${(props) => props.theme.third};
  z-index: 1005;
`;
const yellowMarker = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const greenMarker = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const redMarker = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const blackMarker = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const boxCountIcon20 = new L.divIcon({
  html: renderToStaticMarkup(
    <IconContext.Provider
      value={{
        color: "black",
        size: "25px",
      }}
    >
      <PiCellSignalFullFill
        style={{ color: "#D31119", transform: "translate(-4px,-55px)" }}
      />{" "}
    </IconContext.Provider>
  ),
  iconSize: [0, 0],
  iconAnchor: [10, 10],
});

const boxCountIcon15 = new L.divIcon({
  html: renderToStaticMarkup(
    <IconContext.Provider
      value={{
        color: "black",
        size: "25px",
      }}
    >
      <PiCellSignalHighFill
        style={{ color: "#D31119", transform: "translate(-4px,-55px)" }}
      />{" "}
    </IconContext.Provider>
  ),
  iconSize: [0, 0],
  iconAnchor: [10, 10],
});
const boxCountIcon10 = new L.divIcon({
  html: renderToStaticMarkup(
    <IconContext.Provider
      value={{
        color: "black",
        size: "25px",
      }}
    >
      <PiCellSignalMediumFill
        style={{ color: "#D31119", transform: "translate(-4px,-55px)" }}
      />{" "}
    </IconContext.Provider>
  ),
  iconSize: [0, 0],
  iconAnchor: [10, 10],
});
const boxCountIcon5 = new L.divIcon({
  html: renderToStaticMarkup(
    <IconContext.Provider
      value={{
        color: "black",
        size: "25px",
      }}
    >
      <PiCellSignalLowFill
        style={{ color: "#D31119", transform: "translate(-4px,-55px)" }}
      />{" "}
    </IconContext.Provider>
  ),
  iconSize: [0, 0],
  iconAnchor: [10, 10],
});

export default function Map({ markers }) {
  return (
    <>
      <StyledLegend>
        <PiCellSignalLowFill style={{ color: "#D31119" }} />
        <span>Bis 5 Kisten</span>
        <br />
        <PiCellSignalMediumFill style={{ color: "#D31119" }} />
        <span>Bis 10 Kisten</span>
        <br />
        <PiCellSignalHighFill style={{ color: "#D31119" }} />
        <span>Bis 15 Kisten</span>
        <br />
        <PiCellSignalFullFill style={{ color: "#D31119" }} />
        <span>Über 15 Kisten</span>
      </StyledLegend>
      <StyledMapContainer center={[51.601, 6.659]} zoom={9} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers?.map((marker) => {
          if (!marker.lat) {
            return null;
          }
          return (
            <Marker
              key={marker.id}
              position={[marker.lat, marker.long]}
              icon={
                isNaN(marker.days)
                  ? blackMarker
                  : marker.days > 30
                  ? redMarker
                  : marker.days > 10
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

              {marker.boxes > 0 && (
                <>
                  {marker.boxes <= 5 ? (
                    <Marker
                      position={[marker.lat, marker.long]}
                      icon={boxCountIcon5}
                    />
                  ) : marker.boxes <= 10 ? (
                    <Marker
                      position={[marker.lat, marker.long]}
                      icon={boxCountIcon10}
                    />
                  ) : marker.boxes <= 15 ? (
                    <Marker
                      position={[marker.lat, marker.long]}
                      icon={boxCountIcon15}
                    />
                  ) : (
                    <Marker
                      position={[marker.lat, marker.long]}
                      icon={boxCountIcon20}
                    />
                  )}
                </>
              )}
            </Marker>
          );
        })}
        <LocationMarker />
      </StyledMapContainer>
    </>
  );
}
