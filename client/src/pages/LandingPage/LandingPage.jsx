import "./LandingPage.css"
import Hero from "../../components/LandingPage/Hero/Hero"
import Partners from "../../components/LandingPage/Partners/Partners"
import Platform from "../../components/LandingPage/Platform/Platform"
import CTA from "../../components/LandingPage/CTA/CTA"

export default function LandingPage() {
    return (
        <>
            <Hero />
            <Partners />
            <Platform />
            <CTA />
        </>
    )
}