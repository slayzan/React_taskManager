import Button from './button'

const header = ({onAdd}) => {
    return (
        <header className='header'>
            <h1>Task tracker</h1>
            <Button redColor='#ec5252' 
            textColor='white'
            borderColor='none'
            textDisplay='add'
            onClick={onAdd}
            />
        </header>
    )
}

export default header
