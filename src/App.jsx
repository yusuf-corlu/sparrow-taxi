import { useState, useEffect, Suspense, lazy } from 'react'
import { FiPhone, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './App.css'

// Resim importları
import standardTaxi from './assets/images/standard-taxi.jpg'
import vipTaxi from './assets/images/vip-taxi.jpg'
import securityTaxi from './assets/images/security-taxi.jpg'
import carouselTaxi1 from './assets/images/carousel-taxi.jpg'
import carouselTaxi2 from './assets/images/carousel-taxi2.jpg'
import carouselTaxi3 from './assets/images/carousel-taxi3.jpg'
import carouselTaxi4 from './assets/images/carousel-taxi4.webp'
import carouselTaxi5 from './assets/images/carousel-taxi5.jpg'
import carouselTaxi6 from './assets/images/carousel-taxi6.jpg'
import carouselTaxi7 from './assets/images/carousel-taxi7.jpg'
import ishakPhoto from './assets/images/ishak.jpg'
import furkanPhoto from './assets/images/furkan.jpg'
import taxiIcon from './assets/images/taxi-icon.png'

// Lazy loaded bileşenler
const Hero = lazy(() => import('./components/Hero'))
const Services = lazy(() => import('./components/Services'))
const Pricing = lazy(() => import('./components/Pricing'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const slides = [
  {
    image: carouselTaxi1,
    title: "Güvenli ve Konforlu Yolculuk",
    description: "7/24 hizmetinizde olan profesyonel taksi hizmeti"
  },
  {
    image: carouselTaxi2,
    title: "Şehrin Her Noktasına Ulaşım",
    description: "İstanbul'un tüm bölgelerine hızlı ve güvenli transfer"
  },
  {
    image: carouselTaxi3,
    title: "Havalimanı Transfer Hizmeti",
    description: "Tüm havalimanlarına özel transfer çözümleri"
  },
  {
    image: carouselTaxi4,
    title: "VIP Taksi Deneyimi",
    description: "Lüks araçlarla konforlu seyahat"
  },
  {
    image: carouselTaxi5,
    title: "Kurumsal Hizmetler",
    description: "Şirketinize özel transfer çözümleri"
  },
  {
    image: carouselTaxi6,
    title: "Özel Güvenlik Hizmeti",
    description: "Koruma taksi ile maksimum güvenlik"
  },
  {
    image: carouselTaxi7,
    title: "7/24 Müşteri Desteği",
    description: "Her an yanınızdayız"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const phoneNumber = "905555555555";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    const message = "Merhaba, taksi hizmetiniz hakkında bilgi almak istiyorum.";
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const renderHeader = () => (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo-link">
          <img src={taxiIcon} alt="Sparrow Taksi Logo" className="taxi-logo" />
          <h1>Sparrow Taksi</h1>
        </a>
      </div>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Ana Sayfa</a></li>
          <li><a href="#hizmetler">Hizmetlerimiz</a></li>
          <li><a href="#fiyatlar">Fiyatlar</a></li>
          <li><a href="#iletisim">İletişim</a></li>
        </ul>
      </nav>
      <div className="contact-icons">
        <button onClick={handlePhoneClick} className="icon-button" title="Bizi Arayın">
          <FiPhone className="contact-icon" />
        </button>
        <button onClick={handleWhatsAppClick} className="icon-button" title="WhatsApp'tan Yazın">
          <FaWhatsapp className="contact-icon whatsapp" />
        </button>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className="icon-button" 
          title={isDarkMode ? "Açık Mod" : "Koyu Mod"}
        >
          {isDarkMode ? <FiSun className="contact-icon" /> : <FiMoon className="contact-icon" />}
        </button>
      </div>
      <button 
        className="menu-button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
      >
        {isMenuOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
      </button>
    </header>
  );

  const renderLoadingScreen = () => (
    <div className="loading-screen">
      <div className="loading-content">
        <img src={taxiIcon} alt="Sparrow Taksi Logo" className="loading-logo" />
        <div className="loading-spinner"></div>
      </div>
    </div>
  );

  return (
    <>
      {isLoading ? renderLoadingScreen() : (
        <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
          {renderHeader()}
          
          <Suspense fallback={<div className="loading-screen">Yükleniyor...</div>}>
            <Hero 
              slides={slides}
              currentSlide={currentSlide}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
              setCurrentSlide={setCurrentSlide}
              handlePhoneClick={handlePhoneClick}
            />
          </Suspense>

          <Suspense fallback={<div className="loading-screen">Yükleniyor...</div>}>
            <Services 
              standardTaxi={standardTaxi}
              vipTaxi={vipTaxi}
              securityTaxi={securityTaxi}
            />
          </Suspense>

          <Suspense fallback={<div className="loading-screen">Yükleniyor...</div>}>
            <Pricing handlePhoneClick={handlePhoneClick} />
          </Suspense>

          <Suspense fallback={<div className="loading-screen">Yükleniyor...</div>}>
            <Testimonials 
              ishakPhoto={ishakPhoto}
              furkanPhoto={furkanPhoto}
            />
          </Suspense>

          <Suspense fallback={<div className="loading-screen">Yükleniyor...</div>}>
            <Contact />
          </Suspense>

          <Suspense fallback={<div className="loading-screen">Yükleniyor...</div>}>
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default App;
