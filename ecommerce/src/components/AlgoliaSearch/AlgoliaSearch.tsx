import React from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  connectHits,
} from "react-instantsearch-dom";
import { client } from "../../../config/algolia";

interface HitData {
  previewUrl: string | undefined;
  objectID: string;
  data: {
    images?: { image: string }[];
    productName: string;
    category: string;
    price: number;
    description: string;
    sizes?: { label: string }[];
  };
}

const EditHits = ({ hits }: { hits: HitData[] }) => {
  return (
    <div className="hits-container flex flex-wrap gap-4">
      {hits.slice(0, 4).map((hit: any) => (
        <Hit key={hit.objectID} hit={hit} />
      ))}
    </div>
  );
};

const ConnectedHits = connectHits(EditHits);

function SearchComponent() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <InstantSearch searchClient={client} indexName="builder-product-data">
        <div className="w-full max-w-xl">
          <div className="flex justify-center">
            <SearchBox
              translations={{
                placeholder: "Search for products",
              }}
            />
          </div>
          <p className="text-center text-md mt-3">
            Search by name, category, color, or size
          </p>
        </div>

        <div className="filters mb-8 w-full max-w-xl flex flex-col items-center">
          <RefinementList attribute="category" className="w-full" />
          <RefinementList attribute="data.colors.label" className="w-full" />
          <RefinementList attribute="data.sizes.label" className="w-full" />
        </div>

        <ConnectedHits />
      </InstantSearch>
    </div>
  );
}

function Hit({ hit }: { hit: HitData }) {
  if (!hit || Object.keys(hit).length === 0) {
    return null;
  }
  return (
    <div className="hit-container w-64 border p-4 mb-4 flex flex-col items-center">
      {hit.data.images && hit.data.images[0] && (
        <img
          src={hit.data.images[0].image}
          alt={hit.data.productName}
          className="w-32 h-32 object-cover mb-4"
        />
      )}
      <h2 className="text-md font-bold mb-2 text-center">
        {hit.data.productName}
      </h2>
      <p className="text-sm mb-2 text-center">Category: {hit.data.category}</p>
      <p className="text-sm mb-2 text-center">Price: ${hit.data.price}</p>
      <p className="text-sm mb-2 text-center">
        Sizes:{" "}
        {hit.data.sizes?.map((size: { label: any }) => size.label).join(", ")}
      </p>
      <p
        className="text-sm mb-2 text-center"
        dangerouslySetInnerHTML={{ __html: hit.data.description }}
      />
      <a
        href={hit.previewUrl}
        target="_blank"
        className="text-blue-500 hover:underline mt-auto"
      >
        See More
      </a>
    </div>
  );
}

export default SearchComponent;
