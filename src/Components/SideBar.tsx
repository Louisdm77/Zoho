import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";

const SideBar = () => {
  const [sales, setSales] = useState(false);
  const [purchases, setPurchases] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [time, setTime] = useState(false);
  const handlesSideBars = () => {
    setSideBar(!sideBar);
    setSales(false);
    setPurchases(false);
  };
  const handlesSalesDropDown = () => {
    setSales(!sales);
  };

  const handlesPurchasesDropDown = () => {
    setPurchases(!purchases);
  };
  const handlesTimeDropDown = () => {
    setTime(!time);
  };

  return (
    <div className="w-[70%] fixed p-4 leading-8 font-semibold">
      <div>
        <button onClick={handlesSideBars}>
          <RxHamburgerMenu />
        </button>
      </div>
      {sideBar && (
        <div>
          <div>
            <div className="flex items-center justify-center text-xl bg-gray-700 text-white w-5 text-center rounded-3xl h-10 p-4">
              <span>D</span>
            </div>
            <div>
              <h2>USER-6723</h2>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-start">
            <RiHome2Line /> &nbsp; Home
          </div>
          <div>
            <div>
              <button
                className="flex w-full items-center justify-between items-center "
                onClick={handlesSalesDropDown}
              >
                <div className="flex items-center justify-start">
                  <MdOutlineShoppingCart /> &nbsp; Sales{" "}
                </div>
                <div className="flex item-center">
                  <MdArrowDropDown
                    className={`${sales ? "hidden" : "block"}`}
                  />
                  <MdArrowDropUp className={`${!sales ? "hidden" : "block"}`} />
                </div>
              </button>
            </div>
            {sales && (
              <div className="mx-10 leading-9">
                <ul>
                  <li>Customers</li>
                  <li>Invoices</li>
                  <li>Sales Receipts</li>
                  <li>Payments Received</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div>
              <button
                className="flex w-full items-center justify-between items-center "
                onClick={handlesPurchasesDropDown}
              >
                <div className="flex items-center justify-start">
                  <IoBagHandleOutline /> &nbsp; Purchases{" "}
                </div>
                <div className="flex item-center">
                  <MdArrowDropDown
                    className={`${purchases ? "hidden" : "block"}`}
                  />
                  <MdArrowDropUp
                    className={`${!purchases ? "hidden" : "block"}`}
                  />
                </div>
              </button>
            </div>
            {purchases && (
              <div className="mx-10 leading-9">
                <ul>
                  <li>Vendors</li>
                  <li>Expenses</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div>
              <button
                className="flex w-full items-center justify-between items-center "
                onClick={handlesTimeDropDown}
              >
                <div className="flex items-center justify-start">
                  <LuAlarmClock /> &nbsp; Time Tracking{" "}
                </div>
                <div className="flex item-center">
                  <MdArrowDropDown className={`${time ? "hidden" : "block"}`} />
                  <MdArrowDropUp className={`${!time ? "hidden" : "block"}`} />
                </div>
              </button>
            </div>
            {time && (
              <div className="mx-10 leading-9">
                <ul>
                  <li>Projects</li>
                  <li>Time Enteries</li>
                  <li>Timer</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default SideBar;