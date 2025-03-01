import Image from "next/image";
import React from "react";
import Img from "@/../public/images/clients-logo/1.png";
import Img2 from "@/../public/images/clients-logo/2.png";
import Img3 from "@/../public/images/clients-logo/3.png";
import Img4 from "@/../public/images/clients-logo/4.png";
import Img5 from "@/../public/images/clients-logo/5.svg";
import Img6 from "@/../public/images/clients-logo/6.svg";
import Img7 from "@/../public/images/clients-logo/7.png";
import Img8 from "@/../public/images/clients-logo/8.png";

const clients_logo = [
  {
    alter: "logo hiptoro",
    path: Img,
  },
  {
    alter: "logo gadget",
    path: Img2,
  },
  {
    alter: "logo Canada job bank",
    path: Img3,
  },
  {
    alter: "logo melbourne",
    path: Img4,
  },
  {
    alter: "logo majordomo",
    path: Img5,
  },
  {
    alter: "logo vimerse",
    path: Img6,
  },
  {
    alter: "logo priceay",
    path: Img7,
  },
  {
    alter: "logo jimnastics",
    path: Img8,
  },
];

function Clients() {
  return (
    <div className="bg-black" id="MyClients">
      <div className="py-[30px] max-w-[1200px] m-auto w-[90%]  font-Poppins px-[20px]">
        <div className="w-full mb-16">
         
          <h2 className="text-[40px] tracking-[2px] font-bold">
            Your successful, our <br />
            reputation
          </h2>
        </div>
        <div className="flex flex-wrap w-full ">
          {clients_logo.map((item, index) => (
            <div
              key={index}
              className="outr-box border-collapse p-4 border border-gray-700 h-[250px] grow min-w-[250px]"
            >
              <div className="inr-box bg-grey-900 w-full h-full flex justify-center items-center">
                <Image
                  className="h-[60px] w-[160px]"
                  width={100}
                  height={100}
                  src={item.path}
                  alt={item.alter}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
