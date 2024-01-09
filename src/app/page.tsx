import Hero from "@/components/Hero"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import image from '@/components/Full_stack_developer-transformed.png'
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="w-11/12 py-2 mx-auto flex flex-col gap-10">
        <NavBar/>
        <Hero/>
        {/* <div>
          <Image src={image} alt=""  className=""/>
        </div> */}
        <Footer/>
      </div>
    </div>
  )
}
