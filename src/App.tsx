import Header from './components/Header'
// import SectionsFooter from './components/SectionsFooter'
// Commentaire
import Footer from './components/Footer'
import Sections from './components/Sections'

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col h-full">
        {/* <Sections className="scroll-smooth" /> */}
        <Sections />
        <Footer />
      </div>
    </>
  )
}
