import React from "react";
import axios from "axios";
import { cookies } from "next/headers";
import queryString from "query-string";
import Users from "@/components/admin/users";

const getUsers = async (searchParams) => {
  const nextCookies = cookies();
  const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

  const urlParams = {
    page: searchParams.page || 1,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(
    `${process.env.API_URL}/api/admin/users?${searchQuery}`,
    {
      headers: {
        Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
      },
    }
  );

  return data;
};

const AdminUsersPage = async ({ searchParams }) => {
  const users = await getUsers(searchParams);
  return <Users data={users} />;
};

export default AdminUsersPage;
