import Home from "../Components/Home";
import { GoBell } from "react-icons/go";
const Homepage = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <Home />
        <div className="p-2 bg-gray-100 rounded-4xl mx-2 mt-5">
          <GoBell />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
