import './Dash-Cards.css'

export default function DashBoardCard ({id,description,value,icon}){
    return(
        <section className="card" key={id}>
            <p>{description}</p>
            <section className="bottom">
                <p>{value}</p>
                { icon}
            </section>
        </section>
    )   
}