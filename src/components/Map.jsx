import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerPosition from '../MarkerPosition';

const Map = ({
    address
}) => {
  return (
    <div>
        <MapContainer 
            center={[address.location.lat, address.location.lng]} 
            zoom={13} 
            scrollWheelZoom={true}
            style={{
                height: '600px',
                width: '100%'
            }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerPosition 
                address={address}
            />
        </MapContainer>
    </div>
  )
}

export default Map;