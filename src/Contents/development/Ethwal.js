import React from 'react'
import './Ethwal.css'
import { Container, Row, Col } from 'react-bootstrap'

class Ethwal extends React.Component {
    render() {
        return (
            <>
                <div className="Ethwal">
                    <div className="ethwal-content">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="ethwal-text">
                                        <div className="ethwal-title">
                                            Ethereum <br />
                                            Wallet <br />
                                            Generator
                                        </div>
                                        <div className="ethwal-detail">
                                            Ethereumの秘密鍵、公開鍵、アドレスを <br />
                                            1~100個生成するcliツール <br /><br />
                                            コンソール、.txt、 .xlsxで出力<br />
                                        </div>
                                        <div className="ethwal-detail">
                                            <a href={"https://pypi.org/project/eth-wallet-generater/"}>Ethereum Wallet Generator</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <img src={require("../../Assets/Ethwalgen.png")} alt={"EthwalgenImg"} className="ethwal-img"></img>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        )
    }
}

export default Ethwal;