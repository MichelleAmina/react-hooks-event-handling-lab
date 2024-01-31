// Code Keypad Component Here

function Keypad (){
    function handlePasswordChange(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input 
            type="password"
            onChange={handlePasswordChange}/>
        </div>
    )
}

export default Keypad;