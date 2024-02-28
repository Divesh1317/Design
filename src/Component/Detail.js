import React from 'react';
import Trophy from "./Assert/Trophy.png";
import Picture from "./Assert/Picture.png";
import Photo from "./Assert/Photo.png";
import './Header.css'

function Detail() {
    return (
        <>
            <div className="container">
                <div className="Image">
                    <img src={Trophy} alt="trophy" />
                </div>
                <div className="para">
                    <h2>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
                    <ul>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                        </li>
                    </ul>
                    <div className="image">
                        <img src={Picture} alt="price distribution" />
                    </div>
                    <div className="paragraph">
                        <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong> . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>
            </div>
            <div className="next-para">
                <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                <div className="next-image">
                    <img src={Photo} alt="tools" />
                </div>
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </div>
            <hr />
            <div className="next-heading">
                <h2>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
                <div className="next-paragraph">
                    <p>
                        CHEMICALS &amp; PROCESS <span>|</span> POWER <span>|</span> WATER &amp; WASTE WATER <span>|</span> OILS &amp; GAS <span>|</span> PHARMA <span>|</span> SUGARS &amp; DISTILLERIES <span>|</span> PAPER &amp; PULP <span>|</span> MARINE &amp; DEFENCE <span>|</span> METAL &amp; MINING <span>|</span> FOOD &amp; BEVERAGE<span>|</span>
                    </p>
                    <p>
                        PETROCHEMICAL &amp; REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE &amp; RESIDENTIAL
                    </p>
                </div>

            </div>
        </>
    )
}

export default Detail
