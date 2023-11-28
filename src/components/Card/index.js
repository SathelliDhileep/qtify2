import './card.css'
// import { Tooltip, Chip } from "@mui/material";

export default function Card({imgSrc,followersCount,label}){
    return (
        // <Tooltip title={`${songs.length} songs`} placement="top" arrow>
        <div className='card-wrapper'>
            <div className='card'>
                <div className='card-img-frame'>
                    <img src={imgSrc} alt="card" className='card-img'/>
                </div>

                <div className='card-content'>
                    <span className='card-content-pill'>
                        {followersCount} follows
                    </span>
                </div>
            </div>
            <p className='card-label'>
               {label}
            </p>
        </div>
        // </Tooltip>

    )
}