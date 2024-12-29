import PropTypes from 'prop-types';
import LazyImage from './LazyImage';

const Testimonials = ({ ishakPhoto, furkanPhoto }) => {
  return (
    <section className="testimonials">
      <h2>Müşteri Yorumları</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="testimonial-image">
            <LazyImage src={ishakPhoto} alt="İshak Bulut" />
          </div>
          <h3>İshak Bulut</h3>
          <div className="stars">★★★★★</div>
          <p>&ldquo;Her zaman tercih ettiğim taksi hizmeti. Şoförler çok nazik ve profesyonel.&rdquo;</p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-image">
            <LazyImage src="https://randomuser.me/api/portraits/women/1.jpg" alt="Ayşe Demir" />
          </div>
          <h3>Ayşe Demir</h3>
          <div className="stars">★★★★★</div>
          <p>&ldquo;Havaalanı transferlerinde tam zamanında geliyorlar. Çok memnunum.&rdquo;</p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-image">
            <LazyImage src={furkanPhoto} alt="Furkan Daşdemir" />
          </div>
          <h3>Furkan Daşdemir</h3>
          <div className="stars">★★★★★</div>
          <p>&ldquo;7/24 ulaşılabilir olmaları ve hızlı hizmetleri için teşekkürler.&rdquo;</p>
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  ishakPhoto: PropTypes.string.isRequired,
  furkanPhoto: PropTypes.string.isRequired
};

export default Testimonials; 