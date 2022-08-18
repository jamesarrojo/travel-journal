import location from "../assets/location-icon.svg"

export default function Card(props) {
    
    
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.title} className="card--image" />
            <div className="card--info">
                <span><img src={location} alt="location-icon" /> {props.location} <a href={props.googleMapsUrl}>View on Google Maps</a></span>
                <h2 className="card--title">{props.title}</h2>
                <span className="card--date">{props.startDate} - {props.endDate}</span>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}