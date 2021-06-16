
const Button = ({redColor, textColor, borderColor,textDisplay, onClick}) => {
    return (
        <button
        onClick={onClick}
        style={{backgroundColor: redColor, color: textColor, border: borderColor}} 
        className='btn'>
        {textDisplay}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button
