import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
} from "@nextui-org/react";
import { motion } from "framer-motion";

import { Code } from "lucide-react";

export default function NavbarComponent() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
<<<<<<< Updated upstream
      <nav className="flex items-center space-x-4">
        <Link href="#">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage
                src="https://cgw9vwvsh4bcdqxj.public.blob.vercel-storage.com/profile-cropped.jpg"
                alt="@nathanguianvarch"
              />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Nathan Guianvarch</span>
          </div>
        </Link>
      </nav>
      <nav className="ml-auto flex items-center space-x-2 hidden md:block">
        <Link href="#skills">Skills</Link>
        <Link href="#experiences">Experiences</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#">Contact</Link>
      </nav>
=======
      <Navbar isBordered>
        <NavbarBrand>
          <Avatar
            radius="md"
            size="md"
            src="https://cgw9vwvsh4bcdqxj.public.blob.vercel-storage.com/profile-cropped.jpg"
          />
          <p className="font-bold text-inherit">Nathan Guianvarch</p>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <Link href="#skills">Skills</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#schools">Schools</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#experiences">Experiences</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#projects">Projects</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#contact">Contact</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
>>>>>>> Stashed changes
    </motion.header>
  );
}
