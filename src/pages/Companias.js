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



const Companias = () => {
    return (

        <div class="contenedor-main">
            <div class="whatsapp">
                <button class="Btn">
                    <span class="svgContainer">
                        <svg viewBox="0 0 448 512" fill="white" height="1.6em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                            </path>
                        </svg>
                    </span>
                    <span class="BG"></span>
                </button>
            </div>

            <div class="background">
                <div class="container">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">BROKER</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="container">

                <div class="history-section">
                    <h2 class="history-title">BROKER</h2>






                </div>




            </div>
            <div className="sponsor">
                <img src={image1} alt="Sponsor Logo 1" className="sponsor-logo" />
                <img src={image2} alt="Sponsor Logo 2" className="sponsor-logo" />
                <img src={image3} alt="Sponsor Logo 3" className="sponsor-logo" />
                <img src={image4} alt="Sponsor Logo 4" className="sponsor-logo" />
                <img src={image5} alt="Sponsor Logo 5" className="sponsor-logo" />
                <img src={image6} alt="Sponsor Logo 6" className="sponsor-logo" />
                <img src={image7} alt="Sponsor Logo 7" className="sponsor-logo" />
                <img src={image8} alt="Sponsor Logo 8" className="sponsor-logo" />
                <img src={image9} alt="Sponsor Logo 9" className="sponsor-logo" />
                <img src={image10} alt="Sponsor Logo 10" className="sponsor-logo" />
                <img src={image11} alt="Sponsor Logo 11" className="sponsor-logo" />
            </div>



        </div>

    );
};

export default Companias;
