import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Geometry {
  coordinates: [number, number];
}

interface Properties {
  id: string;
  name: string;
  description: string;
  address: string;
}

interface Feature {
  geometry: Geometry;
  properties: Properties;
}

const Map = dynamic(() => import("../components/Map"), { ssr: false });

const PointsOfSale = () => {
  const [points, setPoints] = useState<Feature[]>([]);

  useEffect(() => {
    const fetchPoints = async () => {
      const response = await fetch(
        "https://data.pid.cz/pointsOfSale/json/pointsOfSale.json"
      );
      const data = await response.json();
      setPoints(
        data.features.map((feature: any) => ({
          geometry: feature.geometry,
          properties: {
            id: feature.properties.id,
            name: feature.properties.name,
            description: feature.properties.description,
            address: feature.properties.address || "No address provided",
          },
        }))
      );
    };
    fetchPoints();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center pt-16">
        <h1 className="text-2xl m-4">Points of Sale</h1>
        <div className="w-full h-96">
          {typeof window !== "undefined" && <Map points={points} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PointsOfSale;
