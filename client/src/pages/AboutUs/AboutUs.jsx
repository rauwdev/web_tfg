import "./AboutUs.css"
import AboutUsHero from "../../components/AboutUs/AboutUsHero/AboutUsHero"
import Mission from "../../components/AboutUs/Mission/Mission"
import Team from "../../components/AboutUs/Team/Team"
import Values from "../../components/AboutUs/Values/Values"

export default function AboutUs() {
    return (
        <>
            <AboutUsHero />
            <Mission />
            <Team />
            <Values />
        </>
    )
}