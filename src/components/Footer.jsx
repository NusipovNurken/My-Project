import "../index.css";
import { Link } from "react-router-dom";
import logo from "../../public/images/vite.svg";

const Footer = () => {
  return (
    <div className="w-full pb-20  flex justify-evenly pl-10 pr-10 pt-5 bg-white">
      
      <div className="w-[1px] h-[200px] bg-black text-m-5 "></div>

      <div className="w-1\3 pl-5">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          laboriosam. Itaque sed quam animi est architecto facere aliquam
          incidunt ullam.
        </h1>
        <Link to='/about' className="w-[100px] h-[30px] mt-5 bg-yellow-400 rounded-xl  ">
          About us
        </Link>
      </div>

      <div className="w-[1px] h-[200px] bg-black text-m-5 "></div>

      <div className="w-1\3 pl-5 flex flex-col">
        <h1> *контакты *8727-329-35-46 * + 77077-145-45-45
            * + 7701-145-10-00</h1>
      </div>
      <div className="w-[1px] h-[200px] bg-black text-m-5 "></div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="relative">
          <img
            src="https://th.bing.com/th/id/R.bceb9795bfef9ec33bd1e84aef7025a3?rik=8sY1RJwxCTnr2w&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1177962.png&ehk=sOnu1aPvJJNUaZ1zCXhvVcdXcL8d8upFEv%2bVz3GDuA0%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="w-[50px] absolute left-[-90px] "
          />
          <p>FOLLOW ALONG</p>
        </div>
        <div className=" flex space-x-4 flex-wrap pl-2 pr-2 justify-center space-y-3">
          <img
            src="https://th.bing.com/th/id/OIP.GbsrglNpiRVjIa8pKAcUzAHaHa?rs=1&pid=ImgDetMain"
            alt=""
            className="w-[50px] h-[50px] ml-[12px] mt-[12px]"
          />
          <img
            src="https://th.bing.com/th/id/R.03f40b67b63d9c1c1a5a792109bbc699?rik=E6ZgqrtSDrG9EQ&pid=ImgRaw&r=0"
            alt=""
            className="w-[50px] h-[50px]"
          />
          <img
            src="https://th.bing.com/th/id/OIP.tPsBeayaSLxzgSJG-RbbtAHaHa?rs=1&pid=ImgDetMain"
            alt=""
            className="w-[50px] h-[50px"
          />
          <img
            src="https://th.bing.com/th/id/R.5794684a3706dd299f8da1a77fc33217?rik=IrzM05ZxqvVJhg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fpinterest%2fpinterest_PNG75.png&ehk=vJmvcVs1vGPhsHBeglADnr9S8n2PJHq2aQTa9GOir6Y%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="w-[50px] h-[50px"
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
