import './Nav.css'

export function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style={{marginBottom:"4px"}}>
                <div class="container-fluid">
                    <a className="navbar-brand" style={{paddingLeft:"40px",paddingTop:"40px"}}>Amina Rajab</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <div></div>
                    <ul class="navbar-nav ms-auto d-flex" style={{paddingTop:"40px",marginRight:"30px"}} >
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#proj">Projects</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            {/* <nav className="navbar navbar-dark " style={{marginBottom:"5px"}}>
                <div className="container-fluid">
                <a className="navbar-brand" style={{paddingLeft:"40px",paddingTop:"40px"}}>Amina Rajab</a>
                    <a className="navbar-toggler"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span >Menu</span>
                    </a>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </nav> */}
        </div>
    )
}