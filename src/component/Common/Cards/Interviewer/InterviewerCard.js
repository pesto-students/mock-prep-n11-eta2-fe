import "./InterviewerCard.css"

export default function InterviewerCard({ id, pic, name, designation,company}) {
    return (
        <section className="interviewerCard" key={id}>
            <img alt="int-profile" src={pic} id="interviewerProfile"  />
            <p className="bold-text">{name}</p>
            <p className="designation-text">{designation}, {company}</p>
        </section>
    )
}