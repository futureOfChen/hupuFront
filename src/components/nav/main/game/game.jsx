import React,{Component} from 'react'

import HeaderNav from './headerNav/headerNav'
import NbaNav from './NbaNav/NbaNav'

class Game extends Component{
    render(){
        return(
            <div>
                <HeaderNav />
                <NbaNav />
            </div>
        )
    }
}

export default Game