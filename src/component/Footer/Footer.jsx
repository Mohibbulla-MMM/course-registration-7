import { BiSolidUpArrowCircle } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-gray-200 w-full px-3 py-10 mt-10  ">
      <p> &copy; 2023 programming.com All Rights Reserved.</p>
      <a href="#topBar" className="fixed right-3 bottom-3 text-3xl cursor-pointer">
        <BiSolidUpArrowCircle></BiSolidUpArrowCircle>
      </a>
    </div>
  );
};

export default Footer;
