export default function Die(props) {
    return (
        <button className={props.die.isHeld ? "is-held" : ""} onClick={props.handleClick}>
            {props.die.value}
        </button>
    );
}