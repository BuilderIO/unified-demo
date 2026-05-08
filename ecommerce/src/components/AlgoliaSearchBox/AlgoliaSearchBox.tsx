import React from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  connectHits,
  connectStateResults,
} from "react-instantsearch-dom";
import { client } from "../../../config/algolia";
import ProductBox from "../ui/productBox";

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
      {hits.slice(0, 5).map((hit: any) => (
        <Hit key={hit.objectID} hit={hit} />
      ))}
    </div>
  );
};

const ConnectedHits = connectHits(EditHits);

const ConditionalHits = connectStateResults(({ searchState }) => {
  const query = searchState && searchState.query;
  return query && query.trim() ? <ConnectedHits /> : null;
});

const AlgoliaSearchBox = () => {
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

        <ConditionalHits />
      </InstantSearch>
    </div>
  );
};

function Hit({ hit }: { hit: HitData }) {
  if (!hit || Object.keys(hit).length === 0) {
    return null;
  }

  return <ProductBox productData={hit} dataSource="Algolia" />;
}

export default AlgoliaSearchBox;
