import React from 'react';
import Image from 'next/image';

export interface HeaderProps {
  logo: string;
  title: string;
  description: string;
}

const Header = ({logo, title, description}: HeaderProps) => {
  return (
    <header className="bg-gray-100 p-5 text-center">
      <Image src={logo} alt="Logo" width={100} height={100} />
      <h1 className="inline ml-2">{title}</h1>
      <p className="mt-4">{description}</p>
    </header>
  );
};

export default Header;
