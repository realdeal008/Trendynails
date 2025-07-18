import Academy from "@/Component/Academy";
import Gallery from "@/Component/Gallery";
import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navbar";
import Salon from "@/Component/Salon";
import Services from "@/Component/Services";
import TopBar from "@/Component/TopBar";
import Events from "@/Component/Event";
import Testimonials from "@/Component/Testimonial";
import NewsletterSection from "@/Component/NewsLetter";
import ContactSection from "@/Component/ContactSection";
import BookFormSection from "@/Component/BookFormSection";
import Footer from "@/Component/Footer";
import FloatingChatButton from "@/Component/FloatingChatButton";


export default function Home() {
  return (
        <>
        <TopBar/>
        <Navbar/>
        <Hero/>
        <Services/>
        <Salon/>
        <Academy/>
        <Gallery/>
        <BookFormSection/>
        <Events/>
        <Testimonials/>
        <NewsletterSection/>
        <ContactSection/>
        <Footer/>
        <FloatingChatButton/>
        </>
  );
}
