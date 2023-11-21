import Button from "../button"
import SearchBox from '../searchbox';
import './Navbar.css'

export default function Navbar() {
    return <div className="navbar">
        <img src="Group 1.png" width={67} height={37} alt="logo"/>
        <SearchBox/>
        <Button>Give Feedback</Button>
    </div>
    
}