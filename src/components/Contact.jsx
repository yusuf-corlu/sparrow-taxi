const Contact = () => {
  return (
    <section id="iletisim" className="contact">
      <h2>İletişim</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Telefon Numaralarımız</h3>
          <p>📞 Çağrı Merkezi: +90 850 555 55 55</p>
          <p>📱 WhatsApp Hattı: +90 532 555 55 55</p>
        </div>
        
        <div className="contact-item">
          <h3>E-posta Adresleri</h3>
          <p>📧 Genel İletişim: info@sparrowtaxi.com</p>
          <p>📧 Müşteri Hizmetleri: destek@sparrowtaxi.com</p>
        </div>

        <div className="contact-item">
          <h3>Çalışma Saatleri</h3>
          <p>🕐 Taksi Hizmeti: 7/24</p>
          <p>📅 Resmi tatiller dahil her gün hizmetinizdeyiz</p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 