import Hero from '../components/home/Hero';
import MarketWidget from '../components/home/MarketWidget';
import GlobalReach from '../components/home/GlobalReach';
import SEO from '../components/common/SEO';
import SteelJourney from '../components/home/SteelJourney';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
    return (
        <main>
            <SEO
                title="Steel Distributors in Raipur | TMT Bars, Angles & Beams"
                description="AB Enterprises is a leading steel distributor in Raipur, Chhattisgarh. We supply high-quality TMT bars, MS angles, beams, channels, and raw materials with express delivery."
                keywords="Steel Distributors Raipur, TMT Bars Chhattisgarh, MS Angles, Industrial Coal, Iron Ore, Steel Trading India"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "AB Enterprises",
                    "image": "https://www.ab-enterprises.co/ab-logo-v2.webp",
                    "url": "https://www.ab-enterprises.co",
                    "telephone": "+919111880444",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "KH No.721/1, Rawabhata, Near Industrial Area",
                        "addressLocality": "Raipur",
                        "addressRegion": "Chhattisgarh",
                        "postalCode": "493221",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 21.32,
                        "longitude": 81.63
                    },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ],
                        "opens": "08:00",
                        "closes": "20:00"
                    }
                }}
            />
            <Hero />
            <GlobalReach />
            <MarketWidget />
            <SteelJourney />
            <Testimonials />
        </main>
    );
};

export default Home;
