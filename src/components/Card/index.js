import './card.css'

export default function Card(){
    return (
        <div className='card-wrapper'>
            <div className='card'>
                <div className='card-img-frame'>
                    <img src="Rectangle 2138.png" alt="card" className='card-img'/>
                </div>

                <div className='card-content'>
                    <span className='card-content-pill'>
                        100 follows
                    </span>
                </div>
            </div>
            <p className='card-label'>
                New English Songs
            </p>
        </div>
    )
}