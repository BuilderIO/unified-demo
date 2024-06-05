import React from 'react';
export interface HeaderProps {
  logo: string;
  title: string;
  description: string;
}

const Header = ({logo, title, description}: HeaderProps) => {
  return (
    <header className="bg-gray-100 p-5 text-center">
      <img src={logo} alt="Logo" className="inline w-12 h-12" />
      <h1 className="inline ml-2">{title}</h1>
      <p className="mt-4">{description}</p>
    </header>
  );
};

export default Header;
