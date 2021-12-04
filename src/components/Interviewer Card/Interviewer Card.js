export default function InterviewerCard ({id, pic, name, designation, company}){
    return (
        <section className="person" key={id}>
            <img alt="int-profile" src={pic} className="profile"  />
            <p className="int-details">{name}</p>
            <p className="int-details">{designation},</p>
            <p className="int-details">{company}</p>
        </section>
    
    )
}