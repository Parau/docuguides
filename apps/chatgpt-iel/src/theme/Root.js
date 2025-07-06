import React from "react";
import { AuthProvider } from "../firebase/Auth";

export default function Root({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

