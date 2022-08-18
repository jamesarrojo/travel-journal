import icon from "../assets/globe-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={icon} alt="globe icon" className="nav--icon" />
            <p>my travel journal.</p>
        </nav>
    )
}