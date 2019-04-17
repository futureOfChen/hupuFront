import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'

import HeaderNav from './headerNav/headerNav'
import './index.less'
import Item from './item/item'
import New from './new/new'
// import NewItem from ''

class Index extends Component{
    render(){
        return(
            <div>
                <HeaderNav />
                <div className='allContent'>
                    <div className='game clearfix'>
                       <Item/>
                       <Item/>
                       <Item/>
                       <Item/>
                    </div >
                    <Link to='/contents/newContent/details'>
                        <New />
                    </Link>
                    <New />
                    <New />
                    <New />
                    <New />
                    <New />
                
                </div>

                {/* <Route path='/nav/main/index/new' component={NewItem}/> */}

            </div>
        )
    }
}

export default Index