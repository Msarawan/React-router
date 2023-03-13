import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { Route , Routes} from 'react-router-dom';

const RoutingPage = () => {
  return (
    <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/news" element={<NewsPage/>} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="/services" element={<ServicesPage />} />
    </Routes>    
  )
}

export default RoutingPage
