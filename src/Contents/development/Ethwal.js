import React from 'react'
import './Ethwal.css'

class Ethwal extends React.Component {
    render() {
        return (
            <>
                <div className="Ethwal">
                    <div className="ethwal-content">
                        <ul className="eth-list-content">
                            <li>
                                <div className="ethwal-text">
                                    <div className="ethwal-title">
                                        Ethereum Wallet <br />
                                            Generator
                                    </div>
                                    <div className="ethwal-detail">
                                        Ethereumの秘密鍵、公開鍵、アドレスを <br />
                                                1~100個生成するcliツール <br /><br />
                                    </div>
                                    <div className="ethwal-detail">
                                        <a href={"https://pypi.org/project/eth-wallet-generater/"}>Ethereum Wallet Generator</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ethwal-img-container">
                                    <img src={require("../../Assets/Ethwalgen.png")} alt={"EthwalgenImg"} className="ethwal-img"></img>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Ethwal;