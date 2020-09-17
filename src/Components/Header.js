import React from 'react';
// functional components need to be passed props as an argument ot receive them, so you ned to place a 
//props parameter to make props work properly
const Header = props => {
   console.log (props) 
    
    
    return (
        <header className='main-header'>
            <h1>
                {props.greeting} {props.username}
            </h1>
            <button onClick={props.usernameFn}>Change Username</button>
            <button onClick={props.secondUsernameFn}>Change Username again</button>
        </header>
    )
}

export default Header;