import "./LandingPage.css"
import Hero from "../../components/Hero/Hero"
import Partners from "../../components/Partners/Partners"
import Platform from "../../components/Platform/Platform"
import CTA from "../../components/CTA/CTA"

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