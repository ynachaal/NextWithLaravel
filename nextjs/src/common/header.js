import Link from "next/link";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm rounded-3 mt-2" aria-label="Eleventh navbar example">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">Navbar</Link>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample09">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">Action</Link></li>
                                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
