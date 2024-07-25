import React from "react";
import { HeadSection } from "./HeadSection";
import OpportunitySection from "./OpportunitySection";
import Partner from "./Partner";
import Footer from "../Footer";
import Navbar from "../Navbar";
const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col ">
      <Navbar/>
      <HeadSection />
     <OpportunitySection />
       <Partner />
      <Footer />
    </div>
  );
};
export default Home;
