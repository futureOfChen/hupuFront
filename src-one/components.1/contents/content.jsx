import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Main from './main/main'

import FootNav from '../common/footNav/footNav'
import HeadNav from '../common/headNav/headNav'

class Content extends Component {
    render(){
        return (
            <div>
                <HeadNav />
                <Route path='/content/main' component={Main}></Route>
                <FootNav />
                
            </div>
        )
    }
}
export default Content