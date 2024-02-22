
import HomePage from './pages/HomePage';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import MessageError from './components/MessageError'
import ArticlePage from './pages/ArticlePage';
import SearchPage from './pages/SearchPage';
import './App.css'
import Footer from './components/Footer';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Container className=''>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:query" element={<SearchPage />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/article/:articleId/:slug" element={<ArticlePage />} />
            
            <Route path='*' element={<MessageError err='404 - Page not found' />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
