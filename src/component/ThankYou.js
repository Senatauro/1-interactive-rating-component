import { useSelector } from "react-redux";

import "./ThankYou.css";

import thankImg from "../illustration-thank-you.svg";


export default function ThankYou() {
    const sel = useSelector((state) => state.rating.value);

    const data = () =>
    {
        if(sel > 0 && sel < 6) {
            return (
                <>
                    <div className="thank-you-rating-value">
                        <p>You selected {sel} out of 5</p>
                    </div>
                    <h1 className="thank-you">Thank you!</h1>
                    <p className="thank-you-p">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                </>)
        }
        else {
            return (
                <>
                    <div className="thank-you-rating-value">
                        <p>Sorry, but you cant give a rating without choosing a value. <br/>Please return to the rating screen</p>
                    </div>
                </>)
        }
    }
    
    return (
        <div className="thank-you-container">
            <img src={thankImg} alt="thank-you" />
            { 
                data()
            }
        </div>
    )
}