import React from "react";
import algoliasearch, { SearchIndex } from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  Pagination,
} from "react-instantsearch-dom";
import { client } from "../../../config/algolia";

function SearchComponent() {
  return (
    <div>
      <InstantSearch searchClient={client} indexName="builder-product-data">
        <SearchBox />

        <RefinementList attribute="category" />

        <Hits hitComponent={Hit} />

        <Pagination />
      </InstantSearch>
    </div>
  );
}

function Hit({ hit }: { hit: any }) {
  console.log("Hit Data:", hit); 
  if (!hit || Object.keys(hit).length === 0) {
    return null; 
  }
  return (
    <div>
      {/* {hit && ( */}
        <>
          {/* {hit.src && <img src={hit.image} alt={hit.name} />}
          {hit.firstname && <h2>{hit.firstname}</h2>}
          {hit.lastname && <p>{hit.lastname}</p>}
          {hit.zip_code && <p>{hit.zip_code}</p>} */}
          {/* {hit.firstPublished} */}
          {/* {hit.name} */}
          {hit.data.category}
          {/* {hit.data.description} */}
          {/* {hit.data.details} */}
          {/* {hit.data.images[0]} */}
          {/* {hit.images && <img src={hit.images} />} */}
          {hit.data.price}
          {hit.data.productName}
        </>
      {/* )} */}
    </div>
  );
}

export default SearchComponent;