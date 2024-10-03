/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import CategoryItem from './CategoryItem';

interface Category {
  image: string;
  name: string;
}
interface ShopByCategoryProps {
  categories: Category[];
  title: string;
}

const ShopByCategory: React.FC<ShopByCategoryProps> = ({ title, categories }) => {
  return (
    <section className="flex flex-col items-center py-11 mt-8 w-full text-center bg-white max-md:max-w-full">
      <h2 className="text-2xl leading-none text-neutral-800">{title}</h2>
      <div className="flex flex-wrap gap-2 justify-center items-start mt-6 text-sm tracking-wide leading-none uppercase text-neutral-800 max-md:max-w-full">
        {categories.map((category, index) => (
          <CategoryItem key={index} image={category.image} name={category.name} />
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;