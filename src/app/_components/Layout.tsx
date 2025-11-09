import { ReactNode } from "react";
import { NavigationBar, Footer } from "./index";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
