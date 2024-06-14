import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface CardInfo {
  status: string;
  expiryDate: string;
}

const Dashboard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardInfo, setCardInfo] = useState<CardInfo | null>(null);

  const checkCard = async () => {
    const response = await fetch(`/api/card/${cardNumber}/validity`, {
      headers: {
        Authorization: "Basic " + btoa("admin:password"),
      },
    });
    const data: CardInfo = await response.json();
    setCardInfo(data);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pt-16">
        <form className="p-6 bg-white rounded shadow-md">
          <div>
            <label>Card Number</label>
            <input
              type="text"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="border p-2 w-full my-4"
            />
          </div>
          <button
            type="button"
            onClick={checkCard}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Check Card
          </button>
          {cardInfo && (
            <div className="mt-4">
              <p>Status: {cardInfo.status}</p>
              <p>Expiry Date: {cardInfo.expiryDate}</p>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
