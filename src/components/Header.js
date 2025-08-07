const Header = () => {
  return (
    <div className="flex space-x-2 justify-between w-full p-5 hover:cursor-pointer bg-slate-300 shadow-lg h-16"> 
      <div className="logo-part text-blue-500 font-bold ">logo</div>
      <div className="nav-elt ">
        <ul className="list flex space-x-3  text-l ">
          <li className="home hover:text-blue-500 bg-blue-100 rounded-md p-1">Home</li>
          <li className="home hover:text-blue-500 bg-blue-100 rounded-md p-1">About</li>
          <li className="home hover:text-blue-500 bg-blue-100 rounded-md p-1">Contacts</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
