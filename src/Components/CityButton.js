import { useState } from "react";

const CityButton = ({ cityDefault }) => {
    
    const [city, setCity] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(city);
        cityDefault(city);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="cities-container">
                <div>
                        <button onClick={(e) => setCity(e.target.value)} value='London' className='city-button'>London</button>
                    </div>
                    <div>
                        <button onClick={(e) => setCity(e.target.value)} value='Tokyo' className='city-button'>Tokyo</button>
                    </div>
                    <div>
                        <button onClick={(e) => setCity(e.target.value)} value='Barcelona' className='city-button'>Barcelona</button>
                    </div>
                    <div>
                        <button onClick={(e) => setCity(e.target.value)} value='Madrid' className='city-button'>Madrid</button>
                    </div>
                    <div>
                        <button onClick={(e) => setCity(e.target.value)} value='Palma de Mallorca' className='city-button'>Palma de Mallorca</button>
                </div>
            </form>
        </div>
    )
}

export default CityButton