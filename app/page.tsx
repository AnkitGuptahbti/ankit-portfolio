import Intro from "@/components/landing-page/intro"
import Projects from "@/components/landing-page/projects"
import Experience from "@/components/landing-page/Experience"
import BlogOnLanding from "@/components/landing-page/blog"
import GitHub from "@/components/landing-page/git-hub"
import FeaturedSystems from "@/components/landing-page/systems"
import CTA from "@/components/landing-page/cta"





export default function Home() {
  return (
    <>
    
      <Intro />
      <div className="w-full h-px bg-outline " />
      <Experience />
      <div className="w-full h-px bg-outline " />
      <Projects />
      <div className="w-full h-px bg-outline " />
      <FeaturedSystems />
      <div className="w-full h-px bg-outline " />
      <GitHub />
      <div className="w-full h-[0.5px] bg-outline" />
      <BlogOnLanding />
      <div className="w-full h-[0.5px] bg-outline" />
      <CTA />
    </>
  )
}
