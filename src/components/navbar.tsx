import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.02 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 28,
      }}
      className="flex items-center mx-auto border border-[#2E2E2E] border-1.5 rounded-full p-1 my-4 w-fit gap-20 overflow-hidden"
    >
      <nav className="flex items-center">
        <a href="#" className="pr-3 text-white rounded-full hover:bg-white/10">
          <div className="flex items-center gap-2">
            <img
              src="https://cgw9vwvsh4bcdqxj.public.blob.vercel-storage.com/profile-cropped.jpg"
              className="w-10 h-10 rounded-full"
              alt="@nathanguianvarch"
            ></img>
            <span className="font-medium hidden md:block text-nowrap">
              Nathan Guianvarch
            </span>
          </div>
        </a>
      </nav>
      <nav className="ml-auto flex items-center gap-2 hidden md:block">
        <Link href="#skills">Skills</Link>
        <Link href="#experiences">Experiences</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#socials">Contact</Link>
      </nav>
      <div className="block md:hidden">
        <a
          href="#"
          className="text-white font-sm rounded-full hover:bg-white/10"
        >
          <Menu className="text-white w-10 h-10" />
        </a>
      </div>
    </motion.header>
  );
}
type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, children }: LinkProps) => {
  return (
    <a
      href={href}
      className="text-white px-3 py-2 font-sm rounded-full hover:bg-white/10"
    >
      {children}
    </a>
  );
};
