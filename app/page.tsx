import Header from "@/components/header"
import Hero from "@/components/hero"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ProcessSection from "@/components/process-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
