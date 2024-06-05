import React from 'react';

export interface NavigationProps {
  headerData: {
    data: {
      title: string;
      slug: string;
    };
    name: string;
  };
}

export default function Navigation({ headerData }: NavigationProps) {
  const { data, name } = headerData;
  const { title, slug } = data;

  return (
    <div>
      <a href="/page2"><h1>{title}</h1></a>
      <p>Slug: {slug === 'header1' ? 'header1' : 'header2'}</p>
      <p>Name: {name}</p>
    </div>
  );
}