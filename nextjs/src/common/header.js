import Link from "next/link";

export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg bg-dark shadow-sm rounded-3 mt-2 nav_header" aria-label="Eleventh navbar example" data-bs-theme="dark">
            <div className="container-fluid px-lg-2">
                <Link className="navbar-brand text-light fw-bold" href="/">Navbar</Link>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample09">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
                        <li className="nav-item">
                            <Link className="nav-link active" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="students">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Products</Link>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link className="dropdown-item" href="#">My Profile</Link></li>
                                <li><Link className="dropdown-item" href="#">Change Password</Link></li>
                                <li><Link className="dropdown-item" href="#">Logout</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Trades</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Contact Us</Link>
                        </li>
                    </ul>
                    <Link href="/students" className="btn btn-primary primary_btn rounded">Get Students...</Link>
                </div>
            </div>
        </nav>
    );
}
