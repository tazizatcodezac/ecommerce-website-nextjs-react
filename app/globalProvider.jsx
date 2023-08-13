"use client";

import { AuthProvider } from "@/context/authContext";
import { CartProvider } from "@/context/cartContext";
import { OrderProvider } from "@/context/orderContext";
import { ProductProvider } from "@/context/productContext";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function GlobalProvider({ children }) {
  return (
    <>
      <ToastContainer position="top-right" />
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <ProductProvider>
              <SessionProvider>{children}</SessionProvider>
            </ProductProvider>
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}
