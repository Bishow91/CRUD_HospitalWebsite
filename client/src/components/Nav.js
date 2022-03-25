import React from 'react'; 
import {Link} from 'react-router-dom';


function Nav() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to='/Appointment' className="nav-item nav-link">Appointment</Link>
                    <Link to='/Patient' className="nav-item nav-link">Patient</Link>
                    <Link to='/Contact' className="nav-item nav-link">Contact</Link>
                    <Link to='/About_us' className="nav-item nav-link">About_us</Link>
                    <Link to='/Help' className="nav-item nav-link">Help</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;