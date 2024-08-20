import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const CarouselComponent = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://example.com/hong-kong.jpg" alt="Hong Kong" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="https://example.com/macao.jpg" alt="Macao" />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src="https://example.com/japan.jpg" alt="Japan" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="https://example.com/las-vegas.jpg" alt="Las Vegas" />
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
