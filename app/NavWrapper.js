"use client";
import Nav from "../components/Nav";
import { useMenu } from "../context/MenuContext";

export default function NavWrapper() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  return (
    <Nav
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    />
  );
}
