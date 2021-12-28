import './DashboardCard.css'

export default function DashBoardCard ({id,description,value,icon}){
    return(
        <section className="card" key={id}>
            <p className='lightText'>{description}</p>
            <section className="bottom">
                <p id="value">{value}</p>
                <i className={icon}></i>
            </section>
        </section>
    )   
}   