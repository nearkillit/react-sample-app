import React from 'react'
import { useHistory } from 'react-router-dom'

const Nav = props => {
    const history = useHistory();
    const handleLink = path => history.push(path)

    return ( 
        <nav>
            <button onClick={() => console.log(history)}>test</button>
            <button onClick={() => handleLink('/todoview')}>todo</button>
            <button onClick={() => handleLink('/')}>home</button>
        </nav>
    )
}

export default Nav;