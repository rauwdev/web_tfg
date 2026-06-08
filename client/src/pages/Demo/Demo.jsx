import DemoFaq from "../../components/Demo/DemoFaq/DemoFaq"
import DemoForm from "../../components/Demo/DemoForm/DemoForm"
import DemoHero from "../../components/Demo/DemoHero/DemoHero"
import "./Demo.css"

export default function Demo() {
    return (
        <>
            <DemoHero />
            <DemoForm />
            <DemoFaq />
        </>
    )
}