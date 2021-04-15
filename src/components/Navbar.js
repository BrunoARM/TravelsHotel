import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Navbar() {

    useEffect(() => {
        Aos.init({duration: 1500});
      }, [])

    return (
        <header>
            <nav data-aos="fade-down">
                <div className="logo">
                    <h2>Travels<span>Hotel</span> </h2>
                </div>
                <ul className="nav-list">
                    <li className="nav-list__item"><a className="nav-list__link" href="/">Rooms</a></li>
                    <li className="nav-list__item"><a className="nav-list__link" href="/">Packages</a></li>
                    <li className="nav-list__item"><a className="nav-list__link" href="/">About us</a></li>
                </ul>
            </nav>
        </header>
    )
}
