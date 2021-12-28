import { Suspense } from "react";
import { createOrder, getData, updateData } from "api/Api";
import { checkIcon } from "constant/antIcons";
import { createRazorOrder, getStudentById, getStudents, updateStudent } from "constant/apiUrl";
import { useSelector,useDispatch } from "react-redux";


import "./PackageCard.css"
import alertActionCreator from "Redux/Action Creators/alertActionCreator";

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

    const getIntCount = (title)=>{ 
        let intCount = 0;
        switch (title) { 
            case "Basic":
                intCount = 1;
                break;
            case "Basic":
                intCount = 3;
                break;
            case "Basic":
                intCount = 7;
                break;
            case "Basic":
                intCount = 10;
                break;
        }

        return intCount;
    }

    const handlePayment = async (response, title) => { 
        
     
        let data = await getData(getStudentById + user.user.id);
        data.package = {
            name: title,
            interviewsLeft: data.interviewsLeft+getIntCount(title)
        }
        await updateData(updateStudent + user.user.id)
       
        alertActionCreator.setMessage(dispatch, "Payment succesfull, Package " + title + " Added")  
        
    }

    const displayRazorpay = async (title,price) => { 
       
        if (user.user && user.user.isLoggedIn && user.user.role !== "interviewer") {
            
            let data = { amount: price.substring(1) * 100 }
            let order = await createOrder(createRazorOrder, data)
      
            let name = "mock prep";
            let email = "info@mockprep.com"
        
            if (user.user) {
                name = user.user.name;
                email = user.user.email
        
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
                    "handler": function (response) { if (response) handlePayment(response, title) },
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
        else { 
            alertActionCreator.setError(dispatch,"Please Sign In/Sign up as student to continue")
        }
    }
     
    return (
        <Suspense fallback={<div>Loading</div>}>
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
        </Suspense >
)
}

