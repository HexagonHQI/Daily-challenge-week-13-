import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import CarouselComponent from './CarouselComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My React Carousel</h1>
                <CarouselComponent />
            </header>
        </div>
    );
}

export default App;
