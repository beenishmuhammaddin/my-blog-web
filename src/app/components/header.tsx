import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-5 text-5xl font-extrabold text-center text-black-600">Binish Rajput</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
