import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main className="d-flex flex-nowrap min-vh-100 overflow-x">
        <Sidebar />
      </main>
    </div>
  );
};

export default Home;
