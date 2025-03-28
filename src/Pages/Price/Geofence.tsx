import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import Button from "../../Components/Button";

interface GeofenceData {
  name: string;
  location: string;
  vehicleType: string;
  status: string;
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

const Geofence = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [] = useState<GeofenceData[]>([]);
  const [, setMap] = useState<google.maps.Map | null>(null);
  const [drawingManager, setDrawingManager] =
    useState<google.maps.drawing.DrawingManager | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=drawing&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      } else {
        window.initMap();
      }
    };

    window.initMap = () => {
      if (mapRef.current && window.google) {
        const defaultCenter = { lat: 37.7749, lng: -122.4194 };

        const newMap = new window.google.maps.Map(mapRef.current, {
          zoom: 12,
          center: defaultCenter,
          mapTypeId: "roadmap",
          streetViewControl: false,
          mapTypeControl: false,
        });

        const newDrawingManager = new window.google.maps.drawing.DrawingManager(
          {
            drawingMode: null,
            drawingControl: false,
            polygonOptions: {
              fillColor: "#FF0000",
              fillOpacity: 0.2,
              strokeWeight: 2,
              strokeColor: "#FF0000",
              editable: true,
            },
          }
        );

        newDrawingManager.setMap(newMap);
        setMap(newMap);
        setDrawingManager(newDrawingManager);
      }
    };

    loadGoogleMapsScript();

    return () => {
      window.initMap = () => {};
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAddGeofence = () => {
    console.log("Add new geofence");
  };

  const handleDrawAll = () => {
    console.log("Draw all geofences");
  };

  const handleClearAll = () => {
    console.log("Clear all geofences");
  };

  const handleDraw = () => {
    if (drawingManager && window.google) {
      drawingManager.setDrawingMode(
        window.google.maps.drawing.OverlayType.POLYGON
      );
    }
  };

  const handleClear = () => {
    if (drawingManager) {
      drawingManager.setDrawingMode(null);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Drivers</h1>
      <div className="p-4 space-y-4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          </div>
          <Button onClick={handleAddGeofence}>Add New Geofence</Button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleDrawAll}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
          >
            Draw All
          </button>
          <button
            onClick={handleClearAll}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          >
            Clear All
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Geofence List */}
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-white shadow-sm">
              <div className="space-y-2">
                <div className="font-medium">Name:</div>
                <div className="font-medium">Location:</div>
                <div className="font-medium">Vehicle Type:</div>
                <div className="font-medium">Status:</div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-[400px] bg-gray-100 rounded-lg relative">
            <div ref={mapRef} className="w-full h-full rounded-lg" />
            <div className="absolute top-4 right-4 space-x-2">
              <button
                onClick={handleClear}
                className="px-3 py-1 bg-white border rounded-md hover:bg-gray-50 transition-colors text-sm"
              >
                Clear
              </button>
              <button
                onClick={handleDraw}
                className="px-3 py-1 bg-white border rounded-md hover:bg-gray-50 transition-colors text-sm"
              >
                Draw
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geofence;
