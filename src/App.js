import ProfileEdit from "./components/ProfileEdit";
import Profile from './components/Profile';
import { Routes, Route } from "react-router-dom";



function App(props) {
  return (

    <>
      <Routes>
        <Route exact path="/profile" element={ <Profile /> } />
        <Route exact path="/profile-edit" element={ <ProfileEdit /> } />
      </Routes>

    </>
  )
}

export default App;
