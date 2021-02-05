import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'
import * as geolib from 'geolib';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
import '../root/style.css'

const Head = () => {

    const [{ userData }, dispatch] = useStateValue()

    let history = useHistory()

    const [end, setEnd] = useState({
        lat: null,
        lng: null
    })


    const start = async () => {

        const response = await fetch('https://pacific-shelf-87157.herokuapp.com/location', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json()
        setEnd({ lat: data[0].lat, lng: data[0].lng })
    }
    useEffect(() => {
        start()
    }, [])


    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        localStorage.setItem('address', results[0].formatted_address)
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng)
    };

    if (coordinates.lat) {
        let geoBetween = geolib.getPreciseDistance(
            { latitude: coordinates.lat, longitude: coordinates.lng },
            { latitude: end.lat, longitude: end.lng }
        );
        let distance = Math.round(geoBetween / 1000)
        localStorage.setItem('distance', distance)
    }
    let dis = localStorage.getItem('distance')


    const clicktoSearch = () => {
        dispatch({
            type: 'ALERT1',
            alert1: true
        });
    }
    const linkTologin = () => {
        history.push('/login')
    }

    return (
        <div className="header">
            <div className="header-content">
                <h1 className="title">Zeit, Essen zu bestellen</h1>
                <p className="header-text">Jetzt Restaurants in Deiner Umgebung finden</p>
                <div className="search-bar">
                    <div className="input-group">

                        <div className='inputSearchBox' >
                            <PlacesAutocomplete
                                value={address}
                                onChange={setAddress}
                                onSelect={handleSelect}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div>
                                        {/* <p>Latitude: {coordinates.lat}</p>
                                        <p>Longitude: {coordinates.lng}</p> */}
                                        <input className='inputSearch' type='text' {...getInputProps({ placeholder: "Type address" })} />

                                        <div>
                                            {loading ? <div>...loading</div> : null}

                                            {suggestions.map((suggestion, index) => {
                                                const style = {
                                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                                                    color: suggestion.active ? "red" : "#000",
                                                };

                                                return (
                                                    <div key={index} {...getSuggestionItemProps(suggestion, { style })}>
                                                        {suggestion.description}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </PlacesAutocomplete>
                        </div>
                    </div>
                    <div className="button-group">
                        {dis && dis < 30 ? <Link to={userData.user ? '/menu' : '/login'}> <button className="btn btn-success mr-1 rounded-0">Servis yap</button> </Link> : <button onClick={userData.user ? clicktoSearch : linkTologin} className="btn btn-success mr-1 rounded-0">Servis yap</button>}
                        <Link to={'/menu'}> <button className="btn btn-success ml-1  rounded-0"> Kendim alacağım</button></Link>
                    </div>
                </div>
            </div>
            <div className="header-img">
                <div className="header-img-top"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg" className="img-fluid" alt="" />
            </div>
        </div >
    );

}

export default Head;
