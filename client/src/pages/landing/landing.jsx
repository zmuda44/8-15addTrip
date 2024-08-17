import useState from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import { useQuery } from "@apollo/client";
// import { GET_ME } from "../../utils/queries";

import landingbg from "../../assets/landingbg.png";

const Landing = () => {
  return (
    <div>
      <main>
        <img src={landingbg} alt="Palm trees" className="bg" />
        <div style={{ textAlign: "center" }}>
          <h1>Nomad Notes</h1>
          <p>Your Gateway to the World!</p>
          <Link to="/login" className="btn btn-primary btn-lg">
            Log In
          </Link>
          <Link to="/signup" className="btn btn-primary btn-lg">
            Sign Up
          </Link>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;
