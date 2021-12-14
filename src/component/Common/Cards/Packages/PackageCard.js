import {Button} from "antd"
import "./PackageCard.css"

export default function PackageCard({ id, title, price, description,benefits,clickFunction}) {
    return (
        <section className="person" key={id}>
            <p id="pricing-title">{title}</p>
            <h1 id="pricing-price">{price}</h1>
            <p id="pricing-description">{description}</p>
            <ul id="pricing-ben">
                {benefits.map((ben, index) => (
                    <li key={index}>{ben}</li>
                ))}
            </ul>
            <Button  id="price-btn">Buy Now</Button>
  
        </section>
    )
}