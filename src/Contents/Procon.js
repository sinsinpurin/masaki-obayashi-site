import React from 'react'
import './Procon.css'
import { SocialIcon } from 'react-social-icons';

class Procon extends React.Component {
    render() {
        return (
            <div className="procon">

                <div>
                    <img src={require("../Assets/Image2.png")} alt={"Image2"} className="image2"></img>
                </div>
                <div className="profile">
                    <p className="text-profile">
                        Profile
                    </p>
                    <p style={{ fontSize: 30 }}>
                        大林 正樹
                    </p>
                    <div className="self-introduction">
                        1998年9月29日生まれ<br />
                        埼玉出身<br />
                        東京電機大学 情報メディア学科<br />
                        情報セキュリティ研究室所属<br />
                        主にブロックチェーン分野を勉強中の学生。<br />
                        新宿で音楽スクールのDJ講師をしていたり<br />
                        子供向けプログラミングスクールの<br />
                        Unityメンターをしていたり<br />
                        幅広い分野で活動している。<br />
                    </div>
                    <ul className="social-list">
                        <li style={{ marginRight: 15 }}>
                            <SocialIcon url="http://twitter.com/sinsinpurin" />
                        </li>
                        <li style={{ marginRight: 15 }}>
                            <SocialIcon url="https://github.com/sinsinpurin" />
                        </li>
                        <li style={{ marginRight: 15 }}>
                            <SocialIcon url="https://www.facebook.com/ohbayashi.masaki/" />
                        </li>
                    </ul>
                </div>
            </div >
        )
    }
}

export default Procon;