import "./InterviewerCard.css"

export default function InterviewerCard({ id, pic, name, designation,company}) {
    return (
        <section className="personCard" key={id}>
            <img alt="int-profile" src={pic} id="profile"  />
            <p className="bold-text">{name}</p>
            <p className="designation-text">{designation}, {company}</p>
        </section>
    )
}