import React , {Component} from 'react';
import HeadSearch from '../../common/headSearch/headSearch';
import {Link} from 'react-router-dom'

import './index.less'
import HeaderNav from '../../common/headerNav/headerNav'
import IndexLink from './indexLink/indexLink';
import New from './New/new'
import Item from './item/item'

class IndexPage extends Component {
    
    render() {
        return (
            <div id='indexpage'>
                <div className='head'>
                    <HeadSearch />
                    <HeaderNav />
                </div>
                <div className='allContent'>
                    <div className='game clearfix'>
                       <Item/>
                       <Item/>
                       <Item/>
                       <Item/>
                    </div >
                    <IndexLink /> 
                    <Link to='/contents/newContent/details'>
                        <New />
                    </Link>
                    <New />
                    <New />
                    <New />
                    <New />
                    <New />
                
                </div>
                
            </div>
        )
    }
}

export default IndexPage;


