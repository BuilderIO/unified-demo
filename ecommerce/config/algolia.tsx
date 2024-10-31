import algoliasearch from "algoliasearch";

const ALGOLIA_APP_ID: string = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? "";
const ALGOLIA_API_KEY: string = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY ?? "";

export const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);