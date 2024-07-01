import React, { useState } from 'react';
import '../App.css';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['../assets/image/slider1.png', '../assets/image/slider2.png', '../assets/image/slider3.png']; // Replace with your image paths

    const showSlide = (index) => {
        if (index >= images.length) {
            setCurrentIndex(0);
        } else if (index < 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(index);
        }
    };

    const nextSlide = () => {
        showSlide(currentIndex + 1);
    };

    const prevSlide = () => {
        showSlide(currentIndex - 1);
    };

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                        <img src={src} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <a className="carousel-control prev" onClick={prevSlide}>&#10094;</a>
            <a className="carousel-control next" onClick={nextSlide}>&#10095;</a>
        </div>
    );
};

export default Slider;
