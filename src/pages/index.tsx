import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center pt-16">
        <h1 className="text-4xl font-bold">Welcome to the OICT App</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
