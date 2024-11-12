import React from "react";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer";
import img2 from "../images/clients/logo2.png";


export default function AboutPage() {
  
  return (
   <>
   <div>
    <NavBar/>
   </div>
    <main className="flex-grow">
    <section className="py-24 bg-gradient-to-b from-primary to-background text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-900">About Us</h2>
        <p className="text-xl max-w-2xl mx-auto">
        Welcome to Our Trusted Simple Line Team. We are a passionate team dedicated to creating innovative solutions that make a difference in people's lives.
        </p>
      </div>
    </section>

    <div className=" background1 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        
        <div className=" order-1 w-full md:w-1/2">
          <img
            src={img2}
            className="md:w-[400px] md:h-[400px] md:ml-12 rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
            alt="TSp-Line"
          />
        </div>
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-10 md:mt-15">
             <div className="space-y-8">
            <p className="text-blue-900 text-2xl md:text-4xl font-bold">Trusted Simple Line</p>
            <p className="text-sm md:text-xl">
            At Trusted Simple Line, we provide reliable, straightforward IT solutions tailored to meet your business needs. Our mission is to simplify technology, delivering secure and efficient services you can trust—from expert consultations to complete web development and hosting. We focus on making tech easy, helping your business succeed online with confidence.</p>
           </div> 
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-primary to-background text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-blue-900 font-bold mb-6">Our Mission</h2>
        <p className="text-xl max-w-2xl mx-auto">
        Our mission is to empower businesses and individuals with technology that enhances productivity, fosters creativity, and drives growth. We believe in the power of innovation to solve complex problems and create a better future for all. </p>
      </div>
    </section>
    </main>
    

    <section className="py-20 bg-gradient-to-b from-primary to-background text-primary-foreground">
    <div className=" background1 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
    
    <div className="container mx-auto px-4 text-center">
    <p className="text-4xl text-blue-900 font-bold mb-6">Our Team</p>
    <div className="w-full order-2 md:order-1 md:w-1/2 mt-10 md:mt-15 ">
             <div className="space-y-8">
            <p className="text-blue-900 text-2xl md:text-4xl font-bold">Marketing Team</p>
            <p className="text-sm md:text-xl">1.Aditya Kakade = Marketing Head</p>
            <p className="text-sm md:text-xl">2.Omkar Pande = Media Head</p>
            <p className="text-sm md:text-xl">3.Sushant Bhor = Event/Cultural Head</p>
        </div> 
        </div>
    </div>
    <div className="w-full order-2 md:order-1 md:w-1/2 mt-10 md:mt-15 ">
             <div className="space-y-8">
            <p className="text-blue-900 text-2xl md:text-4xl font-bold">Development Team</p>
            <p className="text-sm md:text-xl">1.Varad Wagh = Back-End Development</p>
            <p className="text-sm md:text-xl">2.Rohan Gaikwad = Front-End Development</p>
            <p className="text-sm md:text-xl">3.Sanket Dere = Testing & Debugging</p>
            <p className="text-sm md:text-xl">4.Mayur Kanhore = Client Communication</p>
             </div> 
        </div>
         </div>
    </section>
    
    
    <div>
      <Footer/>
    </div>
   </>
  )
}