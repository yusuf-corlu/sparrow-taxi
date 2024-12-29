import PropTypes from 'prop-types';
import LazyImage from './LazyImage';

const Services = ({ standardTaxi, vipTaxi, securityTaxi }) => {
  return (
    <section id="hizmetler" className="services">
      <h2>Hizmetlerimiz</h2>
      <div className="service-cards">
        <div className="service-card">
          <div className="service-image">
            <LazyImage src={standardTaxi} alt="Standart Taksi" className="service-img" />
          </div>
          <h3>Standart Taksi</h3>
          <p>Ekonomik ve konforlu ulaşım için ideal seçim. Deneyimli sürücülerimizle güvenli yolculuk.</p>
          <ul className="service-features">
            <li>✓ 4 Yolcu Kapasitesi</li>
            <li>✓ Klimalı Araçlar</li>
            <li>✓ 7/24 Hizmet</li>
          </ul>
          <button className="service-cta">Detaylı Bilgi</button>
        </div>

        <div className="service-card">
          <div className="service-image">
            <LazyImage src={vipTaxi} alt="VIP Taksi" className="service-img" />
          </div>
          <h3>VIP Taksi</h3>
          <p>Lüks ve konfor arayanlar için premium ulaşım hizmeti. En son model araçlarla özel deneyim.</p>
          <ul className="service-features">
            <li>✓ Lüks Araçlar</li>
            <li>✓ Özel Şoför</li>
            <li>✓ İkram Servisi</li>
          </ul>
          <button className="service-cta">Detaylı Bilgi</button>
        </div>

        <div className="service-card">
          <div className="service-image">
            <LazyImage src={securityTaxi} alt="Koruma Taksi" className="service-img" />
          </div>
          <h3>Koruma Taksi</h3>
          <p>Maksimum güvenlik için özel eğitimli koruma ve sürücü ile VIP transfer hizmeti.</p>
          <ul className="service-features">
            <li>✓ Profesyonel Koruma</li>
            <li>✓ Zırhlı Araç Opsiyonu</li>
            <li>✓ Özel Güvenlik Protokolü</li>
          </ul>
          <button className="service-cta">Detaylı Bilgi</button>
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {
  standardTaxi: PropTypes.string.isRequired,
  vipTaxi: PropTypes.string.isRequired,
  securityTaxi: PropTypes.string.isRequired
};

export default Services; 