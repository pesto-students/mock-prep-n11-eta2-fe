import MPHeader from "../Primary Components/Header/Header"
import Footer from "../Primary Components/Footer/Footer"
import "./About.css"

export default function About() {
    return (
        <>
            <MPHeader />
                <section className="aboutContainer">
                    <h2>About</h2>
                    <p>The global job market is booming and organizations want the best people for these roles, but at times there is a gap between the job seekers and market needs. Thus people exploring these opportunities need the right assistance. Therefore Mock prep allows users to engage with experts in their industry who can assist them in their interview preparation by conducting mock interviews and providing required feedback.</p>
                    <h2>Goals</h2>
                    <ul>
                        <li>To provide a platform where job seekers can connect with experts in any field.</li>

                        <li>Helping people develop interview skills and prepare better for job interviews.</li>

                        <li>To help in the assessment of one's knowledge through tests and mock interviews</li>

                        <li>To help the interviewers use their skills and knowledge to earn valuable experience and income for the time they spend on the platform.</li>
                    </ul>
                    <h2>Why use Mock Prep</h2>
                    <ul>
                        <li>The platform allows you to network with industry professionals and benefit from their experiences.</li>
                        <li>Use the free resources offered for each topic to learn and improve your knowledge in the best manner.</li>
                        <li>Develop and practice interview skills by participating in mock sessions with our experts and receiving helpful feedback.</li>
                        <li>Share your skills and experience with others as an experienced industry professional to obtain mentorship experience and earn money for your time.</li>
                    </ul>
                </section>
            <Footer/>
        </>
    )
}