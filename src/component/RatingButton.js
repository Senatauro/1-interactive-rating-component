import "./RatingButton.css"

export default function RatingButton(props) {
    return (
        <button className={"rating-button " + (props.selected === true ? "selected" : "")} onClick={() => props.changeRating(props.value)}>
            {props.value}
        </button>
    )
}