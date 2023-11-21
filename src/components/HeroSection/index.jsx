import './herosection.css'


export default function HeroSection(){
    return <div className="hs-container">
        <div className="hs-content">
            <div>
                <h1>100 Thousand Songs,ad-free</h1>
                <h1>Over thosands podcast episodes</h1>
            </div>
            <div className="hs-img-frame">
                <img className="hs-img" src='hero.png' alt="hero-img"/>
            </div>
        </div>
    </div>
}