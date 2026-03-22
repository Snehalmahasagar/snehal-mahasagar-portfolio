import { useMemo } from "react";
import { Button } from '@/components/Button'
import { ArrowBigRight, Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
const skills =[
  "Java",
  "C++",
  "Javascript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML",
  "CSS",
  "Git",
  "RESTful APIs",
  "Agile Methodologies",
  "Problem Solving",
  "Mysql",
  "Firebase",
  "Postman",
]

export const Hero = () => {
  const dots = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>
      {/*content */}
      <div className="container mx-auto px-6 py-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/*left */}
            <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Software Developer || React Developer
                    </span>
                </div>
                {/*headlime*/}
<div className="space-y-4">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
        Developing <span className="text-primary glow-text">Digital</span>
       <br/>
       experience with
       <br/>
       <span className="font-serif italic font-normal text-white">
        Precision</span>
    </h1>
    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-800">
        Hi, I'm Snehal Mahasagar - a Software developer specializing in 
        crafting dynamic and responsive web applications using React and Java
        With a passion for coding and a keen eye for design, I transform 
        ideas into seamless digital experiences.
    </p>
</div>
{/*cta*/}
<div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
  <Button size="lg" onClick={scrollToContact}>
    Contact me
    <ArrowBigRight className="w-5 h-5"/>
  </Button>
  <AnimatedBorderButton>
    <Download className="w-5 h-5"/>
    Download CV
  </AnimatedBorderButton>
</div>
{/*Socila links */}
<div className="flex items-center gap-4 animate-fade-in animate-delay-400">
  <span className="text-sm text-muted-foreground">Follow me: </span>
  {[
    {icon:Github, href:"https://github.com/Snehalmahasagar"},
    {icon:Linkedin, href:"https://www.linkedin.com/in/snehal-mahasagar/"},
    {icon:Mail, href:"mailto:snehalmahasagar@gmail.com"}
  ].map((social,idx)=>(
    <a 
    key={idx} 
    href={social.href} 
    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
      <social.icon className="w-5 h-5"/>
    </a>
  ))}
</div>
            </div>
            
            {/*right */}
            <div className="relative animate-fade-in animate-delay-300">
              {/**profile */}
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
                />
          
                <div className="relative glass rounded-3xl p-2 glow-border">
                  <img 
                  src="/project_use.png" 
                  className="w-full aspect-[4/5] object-cover rounded-2xl" 
                  />
                  {/*floating badge */}
                  <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                      <span className="text-sm font-medium">Available for 
                        Freelance and Full 
                        time job</span>
                    </div>
                  </div>
                  {/*stats badge */}
                  <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animate-delay-500">
                    <div className="text-2xl font-bold text-primary ">8+</div>
                    <div className="text-xs text-muted-foreground">Months Exp.</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        {/*skills */}
        <div className="mt-20 animate-fade-in animate-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I worked in!</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marq">
              {[...skills, ...skills].map((skill,idx)=>(
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
