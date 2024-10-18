import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Logo from "./Logo";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const urlPath = window.location.pathname;
  const menuItems = [
    {
      "name":"Skills",
      "link":"/skills"
    },
    {
      "name":"Projects",
      "link":"/projects"
    },
    {
      "name":"Contact Me",
      "link":"/contact"
    }
  ];

  return (
    <Navbar isBlurred={false} onMenuOpenChange={setIsMenuOpen} className="opacity-75 w-full" isBordered >
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
          <Link color ={ (urlPath==="/skills") ? 'primary': "foreground"  } href="/skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/projects" color ={ (urlPath==="/projects") ? 'primary': "foreground"  }  aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color ={ (urlPath==="/contact") ? 'primary': "foreground"  } href="/contact">
            Contact Me
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex gap-6" justify="center">
        <NavbarItem >
          <Link target="_blank" href="https://www.linkedin.com/in/hrikdipta-kundu">
            <FaLinkedin className="text-white text-2xl" />
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link target="_blank" href="https://github.com/hrikdipta" >
          <FaGithub className="text-white text-2xl"/>
          </Link>
        </NavbarItem>
      </NavbarContent>
    
      <NavbarMenu className="bg-black opacity-45 ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-white"
              href={item.link}
              size="lg"
              color ={ (urlPath===item.link) ? 'primary': "foreground"  }
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
