    import { BrowserRouter,Routes,Route } from "react-router-dom"
    
    export default function App() {
      return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element="<Home />"></Route>
                <Route path="/About" element="<About />"></Route>
                <Route path="/Profile" element="<Profile />"></Route>
                <Route path="/Sign-in" element="<Signin />"></Route>
                <Route path="/Sign-up" element="<Sign-up />"></Route>
            </Routes>
        </BrowserRouter>
       
        
      )
    }
    
  
 
