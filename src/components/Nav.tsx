"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <Navbar className="bg-neutral-950 h-24 fixed" onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <Link href="/">
                    <img className="h-20 w-auto border-[3px] border-neutral-50 rounded-full" src="logo.png" alt="Logo not availible" />
                </Link>
            </NavbarBrand>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                <NavbarItem>
                    <Link className="text-neutral-50 text-xl hover:text-neutral-300" href="/">
                        <h3>Home</h3>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-neutral-50 text-xl hover:text-neutral-300" href="/#about-me">
                        <h3>About me</h3>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-neutral-50 text-xl hover:text-neutral-300" href="/#projects">
                        <h3>My work</h3>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-8" justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/#contact" className="bg-gradient-to-tr text-xl from-fuchsia-900 to-violet-900 text-white shadow-lg">Contact</Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-neutral-950">
                <NavbarMenuItem className="mt-10">
                    <Link className="text-neutral-50 text-right text-2xl" href="/">
                        <h3>Home</h3>
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="text-neutral-50 text-right text-2xl" href="/#about-me">
                        <h3>About me</h3>
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="text-neutral-50 text-right text-2xl" href="/#projects">
                        <h3>My work</h3>
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="text-neutral-50 text-right text-2xl" href="/#contact">
                        <h3>Get in touch</h3>
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}