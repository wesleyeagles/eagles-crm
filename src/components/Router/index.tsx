import { Routes, Route } from "react-router-dom";
import { Edit } from "../../pages/Edit/Edit";
import { Form } from "../../pages/Form";
import { Home } from "../../pages/Home";

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/edit/:id' element={<Edit />}/>
            <Route path='/form' element={<Form />}/>
        </Routes>
    )
}