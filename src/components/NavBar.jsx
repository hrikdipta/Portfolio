import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link as NextLink} from "@nextui-org/react";
import Logo from "./Logo";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const urlPath = window.location.pathname;
  const menuItems = [
    {
      "name":"About Me",
      "link":"#about",
      "to":"abour"
    },
    {
      "name":"Skills",
      "link":"#skills",
      "to":"skills"
    },
    {
      "name":"Projects",
      "link":"/projects",
      "to":"projects"
    },
    {
      "name":"Contact Me",
      "link":"/contact",
      "to":"contact"
    }
  ];

  return (
    <Navbar isBlurred={false} onMenuOpenChange={setIsMenuOpen} className="bg-black w-full font-Playpen-Sans" isBordered >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link  href="/">
            <Logo color="white" className='h-8 md:h-10' />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6 mr-7 text-lg" justify="center">
        <NavbarItem >
          <Link
            className="cursor-pointer"
            activeClass="text-blue-400 font-Playpen-Sans"
            to="about"
            smooth={true}
            offset={-50}
            duration={500}
            spy={true}
          >
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link 
            className="cursor-pointer"
            activeClass="text-blue-400 font-Playpen-Sans"
            to="skills"
            smooth={true} 
            offset={-50} 
            duration={500} 
            spy={true}
          >
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link 
            className="cursor-pointer"
            activeClass="text-blue-400"
            to="projects"
            smooth={true} 
            offset={-50} 
            duration={500} 
            spy={true}
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            className="cursor-pointer"
            activeClass="text-blue-400 font-Playpen-Sans"
            to="contact"
            smooth={true} 
            offset={-50} 
            duration={500} 
            spy={true}
          >
            Contact Me
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex gap-6 items-center" justify="center">
        <NavbarItem >
          <NextLink target="_blank" href="https://www.linkedin.com/in/hrikdipta-kundu">
            <FaLinkedin className="text-white text-2xl" />
          </NextLink>
        </NavbarItem>
        <NavbarItem >
          <NextLink target="_blank" href="https://github.com/hrikdipta" >
          <FaGithub className="text-white text-2xl"/>
          </NextLink>
        </NavbarItem>
      </NavbarContent>
    
      <NavbarMenu className="bg-black max-h-fit pb-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="text-white font-Playpen-Sans cursor-pointer"
              activeClass="text-blue-400"
              to={item.to}
              smooth={true} 
              offset={-50} 
              duration={500} 
              spy={true}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
