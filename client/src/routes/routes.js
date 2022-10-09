import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home/home";
import {TopBar} from "../components/topBar";
import { Messages } from "../pages/admin/messages/messages";


function ApplicationRoutes(){
    return(
        <BrowserRouter>
            <TopBar/>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/messages'} element={<Messages />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes;