import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'
import GetEmployee from './components/GetEmployee'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/add' element={<AddEmployee />}></Route>
                <Route path='/edit' element={<EditEmployee />}></Route>
                <Route path='/get/:id' element={<GetEmployee />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
