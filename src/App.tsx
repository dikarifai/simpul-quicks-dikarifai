import { useState } from "react";
import "./App.css";
import {
  ChromeIcon,
  ChromeIcon1,
  FeatherIcon,
  MessageIcon,
  MessageIcon1,
} from "./assets";
import SearchInput from "./components/inputs/SearchIpnut";
import Toogle from "./components/toogles/Toogle";
import Modal from "./components/modal/Modal";

function App() {
  const initialState = {
    name: "Quicks",
    icon: FeatherIcon,
    toogleIcon: FeatherIcon,
    color: "#2F80ED",
  };
  const [isShowToogle, SetIsShowToggle] = useState<boolean>(false);
  const [toogle, setToogle] = useState(initialState);
  const [show, setShow] = useState<boolean>(false);

  const buttonItems = [
    {
      name: "Task",
      icon: ChromeIcon,
      toogleIcon: ChromeIcon1,
      color: "#F8B76B",
    },
    {
      icon: MessageIcon,
      toogleIcon: MessageIcon1,
      name: "Inbox",
      color: "#8785FF",
    },
  ];

  const handleToogle = () => {
    SetIsShowToggle((prev) => !prev);
    setToogle(initialState);
    setShow(false);
  };

  const handleButton = (item: any) => {
    setToogle(item);
    setShow(true);
  };
  return (
    <main className="grid grid-cols-12 w-screen h-screen bg-[#4F4F4F]">
      <div className="col-span-2"></div>
      <div className="col-span-10 border-l-2 border-[#828282]">
        <SearchInput />
        <div className="absolute flex flex-row items-end gap-7 right-7 bottom-8">
          <Modal show={show} />
          <div
            className={`${
              isShowToogle ? "flex" : "hidden"
            }  flex-row text-white gap-7`}
          >
            {buttonItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                onClick={() => handleButton(item)}
                style={
                  toogle.name === item.name
                    ? { display: "none" }
                    : { display: "flex" }
                }
              >
                <p>{item.name}</p>
                <Toogle src={item.icon} className="bg-white w-14" />
              </div>
            ))}
          </div>
          <div>
            <Toogle
              src={toogle.toogleIcon || FeatherIcon}
              className="w-16"
              onClick={handleToogle}
              style={{ background: toogle.color }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
