import PropTypes from 'prop-types';

const Pricing = ({ handlePhoneClick }) => {
  return (
    <section id="fiyatlar" className="pricing">
      <h2>Fiyatlarımız</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Standart Taksi</h3>
            <div className="price">
              <span className="amount">₺8.50</span>
              <span className="per">/km</span>
            </div>
          </div>
          <ul className="pricing-features">
            <li>✓ Açılış Ücreti: ₺15</li>
            <li>✓ Minimum Ücret: ₺50</li>
            <li>✓ Bekleme Ücreti: ₺75/saat</li>
            <li>✓ Rezervasyon: Ücretsiz</li>
          </ul>
          <button onClick={handlePhoneClick} className="pricing-cta">Hemen Ara</button>
        </div>

        <div className="pricing-card featured">
          <div className="pricing-header">
            <h3>VIP Taksi</h3>
            <div className="price">
              <span className="amount">₺12.50</span>
              <span className="per">/km</span>
            </div>
          </div>
          <ul className="pricing-features">
            <li>✓ Açılış Ücreti: ₺25</li>
            <li>✓ Minimum Ücret: ₺100</li>
            <li>✓ Bekleme Ücreti: ₺120/saat</li>
            <li>✓ İkram Servisi Dahil</li>
            <li>✓ Öncelikli Rezervasyon</li>
          </ul>
          <button onClick={handlePhoneClick} className="pricing-cta">Hemen Ara</button>
        </div>

        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Koruma Taksi</h3>
            <div className="price">
              <span className="amount">₺18.50</span>
              <span className="per">/km</span>
            </div>
          </div>
          <ul className="pricing-features">
            <li>✓ Açılış Ücreti: ₺50</li>
            <li>✓ Minimum Ücret: ₺200</li>
            <li>✓ Bekleme Ücreti: ₺150/saat</li>
            <li>✓ Profesyonel Koruma</li>
            <li>✓ Zırhlı Araç Opsiyonu</li>
            <li>✓ 7/24 Özel Hizmet</li>
          </ul>
          <button onClick={handlePhoneClick} className="pricing-cta">Hemen Ara</button>
        </div>
      </div>
    </section>
  );
};

Pricing.propTypes = {
  handlePhoneClick: PropTypes.func.isRequired
};

export default Pricing; 