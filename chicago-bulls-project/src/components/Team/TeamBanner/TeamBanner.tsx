import './TeamBanner.css'
import TeamBg from '../../../assets/team-bg.png'

export const TeamBanner = () => {
    return (
        <div className="background">
            <img src={TeamBg}/>
            <div className="container container-sm">
                <h1 className="text">CHICAGO BULLS, THE ULTIMATE TEAM!</h1>
            </div>
        </div>
    )
}
