import HomeComponent from "@/components/HomeComponents/HomeComponent"
import Footer from "@/components/SingleComponents/Footer"
import Navbar from "@/components/SingleComponents/Navbar"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeComponent />
      <Footer />
    </div>
  )
}

export default Home