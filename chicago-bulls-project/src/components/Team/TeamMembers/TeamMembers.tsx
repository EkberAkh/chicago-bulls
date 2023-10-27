import Coby from '../../../assets/coby-white.png'
import Torrey from '../../../assets/torrey-craig.png'
import Lonzo from '../../../assets/lonzo-ball.png'
import Andre from '../../../assets/andre-drummond.png'
import Jevon from '../../../assets/jevon-karter.png'
import Alex from '../../../assets/alex-karuso.png'
import Zach from '../../../assets/zach-lavine.png'
import Nikola from '../../../assets/nikola-vucevic.png'
import Demar from '../../../assets/demar-derozan.png'
import Carlik from '../../../assets/carlik-jones.png'
import Terry from '../../../assets/terry-taylor.png'
import Patrick from '../../../assets/patrick-williams.png'
import { useTranslation } from 'react-i18next'

import './TeamMembers.css'

export const TeamMembers = () => {
    const {t} = useTranslation();
    return (
        <div className="container">
            <div className="main">
                <h3>{t("TEAM")}</h3>
                <div className="members">
                    <div className="member-item">
                        <h1>0</h1>
                        <img src={Coby} />

                        <div className="bottom">
                            <h1>Coby White</h1>
                        </div>
                    </div>
                    <div className="member-item">
                        <h1>1</h1>
                        <img src={Torrey} />

                        <div className="bottom">
                            <h1>Torrey Craig</h1>
                        </div>
                    </div>
                    <div className="member-item">
                        <h1>2</h1>
                        <img src={Lonzo} />

                        <div className="bottom">
                            <h1>Lonzo Ball</h1>
                        </div>
                    </div>
                    <div className="member-item">
                        <h1>3</h1>
                        <img src={Andre} />

                        <div className="bottom">
                            <h1>Andre Drummond</h1>
                        </div>
                    </div>
                    <div className="member-item">
                        <h1>4</h1>
                        <img src={Jevon} />

                        <div className="bottom">
                            <h1>Jevon Karter</h1>
                        </div>
                    </div>
                    <div className="member-item">
                        <h1>5</h1>
                        <img src={Alex} />

                        <div className="bottom">
                            <h1>Alex Karuso</h1>
                        </div>
                    </div>
                    <div className="member-item">
                        <h1>6</h1>
                        <img src={Zach} />

                        <div className="bottom">
                            <h1>Zach Lavine</h1>
                        </div>
                    </div>
                    <div className="member-item">
                        <h1>7</h1>
                        <img src={Nikola} />

                        <div className="bottom">
                            <h1>Nikola Vucevic</h1>
                        </div>
                    </div>
                    <div className="member-item">
                        <h1>8</h1>
                        <img src={Demar} />

                        <div className="bottom">
                            <h1>Demar Derozan</h1>
                        </div>
                    </div>
                    <div className="member-item">
                        <h1>9</h1>
                        <img src={Carlik} />

                        <div className="bottom">
                            <h1>Carlik Jones</h1>
                        </div>
                    </div>
                    <div className="member-item">
                        <h1>10</h1>
                        <img src={Terry} />

                        <div className="bottom">
                            <h1>Terry Taylor</h1>
                        </div>
                    </div>
                    <div className="member-item">
                        <h1>11</h1>
                        <img src={Patrick} />

                        <div className="bottom">
                            <h1>Patrick Williams</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

