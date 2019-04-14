import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './newDetail.less';
import Comments from './comments/comments'
class NewDetail extends Component{
    render(){
        return(
            <div id='newDetail'>
                <div className='header'>
                <Link to='./news'>
                    <span className="return">《</span>
                </Link>
                    <span className="text">湿乎乎话题</span>
                    <span className="dot">...</span>
                </div>
                <div className='content'>
                    <h1 className='title'>虎扑3月24日讯 独行侠今日在客场以126-91击败勇士，独行侠本场比赛净胜对手35分创队史面对勇士的第二大净胜分差</h1>
                    <div className='name'>
                        <div className='icon'></div>
                        <div className='text'>
                            <div> 克莱-汤普森</div>
                            <span className="date"> 03-24 </span>
                            <span>阅读238898</span>
                        </div>

                    </div>
                    <p className='con'>
                        虎扑3月24日讯，老鹰坐镇主场迎来了76人挑战。首节比赛，76人侵略性十足，在内线屡屡造成杀伤，单节博得了17记罚球。西蒙斯和恩比德在首节各取9分，带领76人在首节取得了41-34的领先。次节比赛，老鹰新秀特雷-杨接管了比赛，3投3中单节豪取12分6助攻带领老鹰展开了绝地反击。最终半场战罢，双方的比分定格在了74-68，老鹰完成逆转。

                        易边再战，西蒙斯扛起了76人进攻的大旗，单节交出8分2篮板3助攻的全面数据带领76人奋起直追。在第三节结束前，此前状态低迷的雷迪克终于找回了手感，依靠外线投射连取5分帮助76人在第三节把比分追到了100-100。末节比赛，双方陷入了紧张的拉锯战，比分交替上升，两队一直都比赛的最后时刻都没能分出胜负。最终特劳-杨终场前抛投命中，完成绝杀，帮助老鹰以129-127的比分战胜了76人，终结了对手的6连胜。

                        老鹰数据：特雷-杨32分6篮板11助攻；托里恩-普林斯23分5篮板3助攻；约翰-柯林斯13分9篮板；德维恩-戴德蒙17分8篮板。

                        76人数据：乔尔-恩比德27分12篮板；本-西蒙斯21分6篮板9助攻；吉米-巴特勒25分6篮板4助攻；托拜厄斯-哈里斯13分9篮板；JJ-雷迪克14分；迈克-斯科特9分8篮板。

                        两队分差：上边76人，下边老鹰

                        柱状图表示两队得分差，矩形越高差值越大

                        [伤病名单]

                        老鹰：迈尔斯-普拉姆利左膝疼痛；奥马里-斯佩尔曼左脚踝受伤；亚历克斯-波伊思雷斯右脚踝受伤。

                        76人：富尔坎-科尔克马兹膝盖受伤。
                    </p>
                    
                    <Comments />
                 
                </div>

                <div className='footFixed'>
                    <div className='page'>第一页</div>
                    <div className='inputBox'>
                        <input type="text" placeholder='我来写评论'/>
                    </div>
                    <div className='iconBox'>
                        <ul className='clearfix'>
                            <li>
                                <div className="icon"></div>
                                <div className="text">111</div> 
                            </li>
                            <li>
                                <div className="icon"></div>
                                <div className="text">111</div> 
                            </li>
                            <li>
                                <div className="icon"></div>
                                <div className="text">111</div> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewDetail