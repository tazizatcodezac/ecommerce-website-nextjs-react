import React from "react";
import UploadImages from "@/components/admin/uploadImages";

const HomePage = async ({ params }) => {
  return <UploadImages id={params.id} />;
};

export default HomePage;
