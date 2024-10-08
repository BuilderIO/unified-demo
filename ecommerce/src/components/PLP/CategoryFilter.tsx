/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import { Checkbox } from '@/src/components/ui/checkbox';

interface CategoryFilterProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategories,
  setSelectedCategories,
}) => {
  const categories = ['Jackets', 'Pea Coats', 'Leather', 'Vests'];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <>
      {categories.map((category) => (
        <div key={category} className="flex gap-3.5 mt-4">
          <Checkbox
            id={category.toLowerCase()}
            checked={selectedCategories.includes(category)}
            onCheckedChange={() => handleCategoryChange(category)}
          />
          <label htmlFor={category.toLowerCase()}>{category}</label>
        </div>
      ))}
    </>
  );
};