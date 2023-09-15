const Header = () => {
  return (
    <header>
      <div id="topBar" className="flex sm:flex-row  flex-col gap-4 justify-between items-center py-4 shadow-md  px-3 mb-5">
        <h1 className=" md:text-3xl text-2xl font-semibold  ">
          Course Registration
        </h1>
        <figure>
          <img
            className="w-16 rounded-full inline-block cursor-pointer"
            src={"https://i.ibb.co/0mZJptP/boy2.jpg"}
            alt=" site logo"
          />
        </figure>
      </div>
    </header>
  );
};

export default Header;
