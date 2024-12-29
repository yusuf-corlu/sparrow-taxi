import PropTypes from 'prop-types';

const Hero = ({ slides, currentSlide, nextSlide, prevSlide, setCurrentSlide, handlePhoneClick }) => {
  return (
    <section id="hero" className="hero">
      <button className="carousel-button prev" onClick={prevSlide}>❮</button>
      <div className="carousel-content" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slides[currentSlide].image})`
      }}>
        <div className="hero-content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
          <button onClick={handlePhoneClick} className="cta-button">Hemen Taksi Çağır</button>
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>❯</button>
      
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

Hero.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  currentSlide: PropTypes.number.isRequired,
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
  setCurrentSlide: PropTypes.func.isRequired,
  handlePhoneClick: PropTypes.func.isRequired
};

export default Hero; 