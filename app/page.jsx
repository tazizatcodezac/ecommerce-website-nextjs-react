import axios from "axios";
import React from "react";
import queryString from "query-string";
import ListProducts from "@/components/products/listProducts";

const getProducts = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
    "ratings[gte]": searchParams.ratings,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(`${process.env.API_URL}/api/products?${searchQuery}`);
  return data;
};

const HomePage = async ({ searchParams }) => {
  const productsData = await getProducts(searchParams);
  return <ListProducts data={productsData} />;
};

export default HomePage;
