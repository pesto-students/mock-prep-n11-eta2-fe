import { checkIcon } from "constant/antIcons";
import "./PackageCard.css"

export default function PackageCard({ id, title, price, description, benefits, clickFunction }) {
    

    var d = document;
    var x = !d.getElementById('razorpay-embed-btn-js')
    if (x) {
        var s = d.createElement('script');
        s.defer = !0; s.id = 'razorpay-embed-btn-js';
        s.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js';
        d.body.appendChild(s);
    } else {
        var rzp = window['__rzp__'];
        rzp && rzp.init && rzp.init()
    }


    return (
        <section className="person" key={id}>
            <p id="pricing-title">{title}</p>
            <h3 id="pricing-price">{price}</h3>
            <p id="pricing-description">{description}</p>
            <ul id="pricing-ben">
                {benefits.map((ben, index) => (
                   <li key={index}> {checkIcon}{ben}</li>
                ))}
            </ul>
            <button className="btn btn-outline-primary w-75 choose">Choose Plan</button>
        </section>
)
}