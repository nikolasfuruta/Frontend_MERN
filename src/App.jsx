import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout  from './components/Layout.jsx'
import Public from './components/Public.jsx'
import Login from './features/auth/Login.jsx'
import PrivateLayout from "./components/PrivateLayout.jsx";
import Welcome from "./features/auth/Welcome.jsx";
import NotesList from './features/notes/NotesList.jsx'
import UsersList from './features/users/UsersList.jsx'

export const app = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    {/* PUBLIC */}
      <Route index element={<Public/>}/>

      <Route path="login" element={<Login/>}/>
      
      {/* PRIVATE */}
      <Route path="private" element={<PrivateLayout/>}>
        <Route index element={<Welcome/>}/>

        <Route path="notes">
          <Route index element={<NotesList/>}/>
        </Route>

        <Route path="users">
          <Route index element={<UsersList/>}/>
        </Route>

      </Route>{/* END PRIVATE */}
    {/* END PUBLIC */}
    </Route>
  )
);