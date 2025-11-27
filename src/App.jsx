import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import Features from './sections/Features.jsx'
import Pricing from './sections/Pricing.jsx'
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
//main body content
const App = () => {
    return (
        //to hide unnecessary scrolling bars
        <main className="overflow-hidden">
            <Header />
            <Hero />
            <Features />
            <Pricing />
            <Faq />
            <Testimonials />
            <Download />
        </main>
    )
}

export default App

// <div>
//     <h1 className="text-3xl font-bold underline">
//         Hello world!
//     </h1>
// </div>