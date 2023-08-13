import React from "react";
import axios from "axios";
import { cookies } from "next/headers";
import Profile from "@/components/auth/profile";

const getAddresses = async () => {
  const nextCookies = cookies();
  const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

  const { data } = await axios.get(`${process.env.API_URL}/api/address`, {
    headers: {
      Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
    },
  });

  return data?.addresses;
};

const ProfilePage = async () => {
  const addresses = await getAddresses();
  return <Profile addresses={addresses} />;
};

export default ProfilePage;
