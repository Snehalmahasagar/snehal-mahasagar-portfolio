import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
// ...existing code...
const navLinks = [
    {href: "#about",label: "About"},
    {href: "#projects", label:"Projects"},
    {href:"#experience", label:"Experience"},
    {href: "#testimonials", label:"Testimonials"},
];
export const Navbar = () => {
  const [isMobile,setIsMobile] = useState(false);
  const [isScrolled,setisScrolled] = useState(false);
  useEffect(()=>{
    const handleScorll = () =>{
      setisScrolled(window.scrollY > 50);
    }
    window.addEventListener("sccroll",handleScorll);
    return () => window.removeEventListener("scroll",handleScorll);

  },[]);
   return(
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                Snehal Mahasagar<span className="text-primary">.</span>
            </a>
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                {navLinks.map((link,index)=>(
                    <a href={link.href}
                     key={index}
                      className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface ">{link.label}</a>
                ))}
                </div>
            </div>
            <div className="hidden md:block"><Button size="sm">
                Contact me
                </Button></div>

                {/* Mobile button */}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() =>setIsMobile((prev)=>!prev)}>
                        {isMobile ? <X size={24}></X> : <Menu size={24} ></Menu>}
                </button>
        </nav>
        {isMobile &&(
          <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link,index)=>(
                <a
                  href={link.href}
                  key={index}
                  onClick={() =>setIsMobile(false)}
                  className="block text-lg text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button onClick={() =>setIsMobile(false)} className="w-full bg-primary text-foreground">Contact me</Button>
            </div>
          </div>
        )}
    </header>
   )
}
// ...existing code...