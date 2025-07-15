"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", linkNav: "/#" },
    { name: "About us", linkNav: "/#about" },
    { name: "Why JBX?", linkNav: "/#why" },
    { name: "Q&A", linkNav: "/#q&a" },
    { name: "Pricing", linkNav: "/#price" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <a href="/#">
            {" "}
            <img
              fill="none"
              height="36"
              viewBox="0 0 32 32"
              width="36"
              src="https://res.cloudinary.com/dcu06etml/image/upload/v1696118047/jaguarbox/mwkqpqgvzx8wdwrhwu6f.png"
            />
          </a>
          <p className="font-bold text-inherit">JBx</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img
            fill="none"
            height="36"
            viewBox="0 0 32 32"
            width="36"
            src="https://res.cloudinary.com/dcu06etml/image/upload/v1696118047/jaguarbox/mwkqpqgvzx8wdwrhwu6f.png"
          />

          <p className="font-bold text-inherit">JBx</p>
        </NavbarBrand>
        <NavbarItem>
          <a color="foreground" href="/#">
            Home
          </a>
        </NavbarItem>
        <NavbarItem>
          <a color="foreground" href="/#about">
            About us
          </a>
        </NavbarItem>
        <NavbarItem isActive>
          <a href="/#why" aria-current="page">
            Why JBX?
          </a>
        </NavbarItem>

        <NavbarItem>
          <a color="foreground" href="/#q&a">
            Q&A
          </a>
        </NavbarItem>
        <NavbarItem>
          <a color="foreground" href="/#price">
            Pricing
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <a
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.linkNav}
              size="lg"
            >
              {item.name}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
