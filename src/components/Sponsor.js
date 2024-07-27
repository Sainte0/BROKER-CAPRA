import React from 'react';
import image1 from '../assets/img/allianz.png';
import image2 from '../assets/img/cristobal.png';
import image3 from '../assets/img/fedpat.png';
import image4 from '../assets/img/galicia.png';
import image5 from '../assets/img/integrity.png';
import image6 from '../assets/img/lps.png';
import image7 from '../assets/img/mercantil.png';
import image8 from '../assets/img/norte.png';
import image9 from '../assets/img/rus.png';
import image10 from '../assets/img/sancor.png';
import image11 from '../assets/img/segunda.png';
import image12 from '../assets/img/galeno.png';
import image13 from '../assets/img/berkley.png';
import image14 from '../assets/img/prevencion.png';
import './css/Sponsor.css'; // Asegúrate de importar el archivo CSS

const Sponsor = () => {
    return (
        <div className="sponsor">
            <img src={image1} alt="Sponsor Logo 1" className="sponsor-logo" />
            <img src={image12} alt="Sponsor Logo 13" className="sponsor-logo" />
            <img src={image2} alt="Sponsor Logo 2" className="sponsor-logo" />
            <img src={image3} alt="Sponsor Logo 3" className="sponsor-logo" />
            <img src={image4} alt="Sponsor Logo 4" className="sponsor-logo" />
            <img src={image5} alt="Sponsor Logo 5" className="sponsor-logo" />
            <img src={image6} alt="Sponsor Logo 6" className="sponsor-logo" />
            <img src={image7} alt="Sponsor Logo 7" className="sponsor-logo" />
            <img src={image8} alt="Sponsor Logo 8" className="sponsor-logo" />
            <img src={image9} alt="Sponsor Logo 9" className="sponsor-logo" />
            <img src={image10} alt="Sponsor Logo 10" className="sponsor-logo" />
            <img src={image13} alt="Sponsor Logo 11" className="sponsor-logo" />
            <img src={image11} alt="Sponsor Logo 12" className="sponsor-logo" />
        </div>
    );
};

export default Sponsor;
