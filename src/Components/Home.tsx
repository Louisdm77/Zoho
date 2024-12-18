import { useState, useEffect } from "react";
import Logo from "../assets/Images/log.png";
import SideBar from "../Components/SideBar";
const Home = () => {
  const [logo, setLogo] = useState(true);

  useEffect(() => {
    const logoView = setTimeout(() => {
      setLogo(false);
    }, 5000);
    return () => clearTimeout(logoView);
  }, []);

  return (
    <>
      <div
        className={`w-full h-screen  md:hidden flex items-center justify-center ${
          logo ? "block" : "hidden"
        }`}
      >
        <img src={Logo} alt="" className="w-[30%] h-auto" />
      </div>
      <div>
        <SideBar />
      </div>
    </>
  );
};
export default Home;
