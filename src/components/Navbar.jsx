import "../index.css";
import logo from "../../public/images/vite.svg";
import  {Link}  from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-[60px] bg-green-200 flex justify-between  items-center pl-10 pr-10 fixed">
      <img src={logo} width={40} height={60} alt="logo" />

      <Link className="bg-green-500 rounded-lg" to={"/generation"}>
        generation
      </Link>
      <Link className=" bg-yellow-400 rounded-lg" to={"/"}>
        MainPage
      </Link>
      <Link className="bg-red-600 rounded-lg" to={"/about"}>
        About us
      </Link>
      <span className="material-icons ">home</span>
      

    </div>
  );
};
export default Navbar;
