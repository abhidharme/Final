
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Login } from './Components/AdminLogin'
import { Teacherslist } from './Components/TeacherList'
import { Class } from './Components/Class'
import { AddTecherDetails } from './Components/AddData'



function App() {

  return (
   <>
   <Routes>
   <Route path="/home" element={<Home/>}></Route>
   <Route path="/login" element={<Login/>}> </Route>
    <Route path='/' element={<Teacherslist /> } />
    <Route path='/class' element={<Class />} />
    <Route  path='/admin' element={<AddTecherDetails />} />
   </Routes>
   </>
  )
}

export default App
