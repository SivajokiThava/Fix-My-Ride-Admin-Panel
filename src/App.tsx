import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Layouts/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Locations from "./Pages/Locations";
import Reports from "./Pages/Reports";
import Jobs from "./Pages/Jobs";
import Drivers from "./Pages/Users/Drivers";
import Operators from "./Pages/Users/Operators";
import Distance from "./Pages/Price/Distance";
import Geofence from "./Pages/Price/Geofence";
import PeakHours from "./Pages/Price/PeakHours";
import AvailableVehicleTypes from "./Pages/VehicleType/AvailableVehicleTypes";
import CreateDriver from "./Pages/VehicleType/CreateDriver";
import CreateVehicleType from "./Pages/VehicleType/CreateVehicleType";
import TypesByCountry from "./Pages/VehicleType/TypesByCountry";
import AvailableTimeSlot from "./Pages/VehicleType/AvailableTimeSlot";
import RateCard from "./Pages/VehicleType/RateCard";
import BaseFare from "./Pages/VehicleType/BaseFare";
import NightTimeCharges from "./Pages/VehicleType/NightTimeCharges";
import PeakTimeCharges from "./Pages/VehicleType/PeakTimeCharges";
import DriverDocuments from "./Pages/VehicleType/DriverDocuments";
import InsuaranceProvider from "./Pages/VehicleType/InsuaranceProvider";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="users">
            <Route path="drivers" element={<Drivers />} />
            <Route path="operators" element={<Operators />} />
          </Route>
          <Route path="price">
            <Route path="distance" element={<Distance />} />
            <Route path="geofence" element={<Geofence />} />
            <Route path="peak hours" element={<PeakHours />} />
          </Route>
          <Route path="locations" element={<Locations />} />
          <Route path="vehicleType">
            <Route path="vehicletypes" element={<AvailableVehicleTypes />} />
            <Route path="createdriver" element={<CreateDriver />} />
            <Route path="createtype" element={<CreateVehicleType />} />
            <Route path="typesbycountry" element={<TypesByCountry />} />
            <Route path="timeslot" element={<AvailableTimeSlot />} />
            <Route path="ratecard" element={<RateCard />} />
            <Route path="basefare" element={<BaseFare />} />
            <Route path="nighttimecharges" element={<NightTimeCharges />} />
            <Route path="peaktime" element={<PeakTimeCharges />} />
            <Route path="driverdoc" element={<DriverDocuments />} />
            <Route path="insuaranceprovider" element={<InsuaranceProvider />} />
          </Route>
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
