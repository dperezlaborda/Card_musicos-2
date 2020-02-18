import React from 'react';
import './Card.css';

const Card = (props)=>{
    return(
        <div className="card-container">
            <section className="card" style={{
                backgroundImage : `url(${props.img})`
                }}>     
                <article className="card-article">
                    <div>
                        <h2>{props.subtitle}</h2>
                    </div>           
                    <div>
                        <h1>{props.title}</h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis, urna a varius congue, ipsum sem tincidunt nisi, 
                        a maximus tortor nulla id purus.n dapibus suscipit tincidunt. Duis tristique.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis, urna a varius congue, ipsum sem tincidunt nisi, 
                        a maximus tortor nulla id purus.n dapibus suscipit tincidunt. Duis tristique.
                        consectetur adipiscing elit. Phasellus facilisis, urna a varius congue, ipsum sem tincidunt nisi, 
                        a maximus tortor nulla id purus.n dapibus suscipit tincidunt. Duis tristique.</p>
                    </div>
                </article>
                <div className="icono-star">
                    <i class="fa fa-arrow-down" aria-hidden="true" style={{
                        color:props.color
                        }}>
                    </i>
                </div>
            </section>
        </div>
    );
};

export default Card; 
