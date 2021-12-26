import { createOrder } from "api/Api";
import { checkIcon } from "constant/antIcons";
import { createRazorOrder } from "constant/apiUrl";
import { useSelector,useDispatch } from "react-redux";
import alertActionCreator from "Redux/Action Creators/alertActionCreator";


import "./PackageCard.css"


function loadRazorPay  ()  { 
    return new Promise(resolve => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        document.body.appendChild(script)
        script.onload = () => { 
            resolve(true)
        }
        script.onError = () => {
            resolve(false)
        }
        console.log(script.Razorpay)
    })
   
}   

export default function PackageCard({ id, title, price, description, benefits }) {

    const user = useSelector(state => state.authReducer)
    const dispatch = useDispatch()

    const handlePayment = (response,title) => { 
        console.log(response)
        
        alertActionCreator.setMessage(dispatch, "Payment succesfull, Package "+title+" Added")   
    }

    const displayRazorpay = async (title,price) => { 
       
    
       
        let data = {amount: price.substring(1)*100}
        let order = await createOrder(createRazorOrder, data)
      
        let name = "mock prep";
        let email = "info@mockprep.com"
        
        if (user.user) { 
            name= user.user.name;
            email= user.user.email
        
        }
        
        if (order.status === "success") {
            const res = await loadRazorPay();
           
            var options = {
                "key": "rzp_test_NqioSTNNKAmafH",
                "currency": "INR",
                "name": "Mock Prep",
                "description": title + " Package purchase",
                "image": "https://res.cloudinary.com/mock-prep/image/upload/v1638303030/Mockprep/mock_gozyss.png",
                "order_id": order.res.data.id,
                "handler": function (response) { if (response) handlePayment(response,title) },
                "prefill": {
                    "name": name,
                    "email": email
                },
                "notes": {
                    "item": "Mock Prep package purchase",
                    "package": title
                },
                "theme": {
                    "color": "#003399"
                }
            };
    
            if (res) { 
                let rzp = new window.Razorpay(options);
                rzp.open()
            }
           
        }

        else { 
            alertActionCreator.setError(dispatch, "Error processing payment, try again later")   
        } 
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
            <button onClick={()=>displayRazorpay(title,price)} className="btn btn-outline-primary w-75 choose">Choose Plan</button>
        </section>
)
}

