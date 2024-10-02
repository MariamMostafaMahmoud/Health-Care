// Style
import './Style/App.scss';
// Components
import Navs from './components/nav/nav';
import Home from './pages/Home';
import About from './components/About/About';
import Layout from './components/Layout';
import ContactUS from './pages/contact';
// React
import { Fragment } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import SearchBar from './components/search/search';
import MySlider from './components/slide/slide';
import News from './components/news/news';
import OurTeam from './pages/Ourteam/ourteam';
import Faq from './components/FAQ/faq';
import Error from './components/Erorr/Erorr';
import Booking from './components/Booking/booking';
import Login from './components/login/login';
import Service from './pages/Services/Services';
import BlogDetails from './pages/BlogDetails/blogDetails';
import Blog from './pages/Blog/blog';
import AboutUS from './pages/AboutUs/AboutUs';
import ServiceDetails from './pages/serviceDetails/serviceDetails';




// Routing
const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index  element={<Home />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/About' element={<AboutUS />} />
    <Route path='/OurTeam' element={<OurTeam />} />
    <Route path='/FAQ' element={<Faq />} />
    <Route path='/Booking' element={<Booking />} />
    <Route path='/Error' element={<Error />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/Services' element={<Service />} />
    <Route path='/ServicesDetails' element={<ServiceDetails/>}/>
    <Route path='/Blog' element={<Blog />} />
    <Route path='/BlogDetails' element={<BlogDetails />} />
    <Route path='/Contact' element={<ContactUS />} />
  </Route>
))
function App() {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  );
}

export default App;
