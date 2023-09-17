import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

const MyRoutes = () => {
  return (
     <>
     
       <Router>
         <Link to="/"> Sign In </Link>
         <Link to="/signup"> Sign Up </Link>
         <Link to="/home"> Home </Link>
         
         <Routes>
           <Route path="/" element= {<SignIn />} />
           <Route path="/signup" element= {<SignUp />} />
           <Route path="/home" element= {< Home />} />
         </Routes>
       </Router>
     
     </>
    
    )
}

export default MyRoutes;