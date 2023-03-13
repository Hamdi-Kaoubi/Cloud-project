import './App.css';
import Map from './Components/Map';

function App() {
  const location = {
    address:
      "GOMYCODE Tunis Centre ville, 2ème étage, 2 Rue Charles de Gaulle, Tunis 1000",
      lat: 36.79940,
      lng: 10.17767
  };
  return <Map location={location} zoomLevel={15} />;
}
  
export default App;
