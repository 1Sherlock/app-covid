import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Laboratory from "./pages/Laboratory";
import Sampling from "./pages/Sampling";
import AddResult from "./pages/AddResult";
import AddLab from "./pages/AddLab";
import AddLocation from "./pages/AddLocation";
import ShowResult from "./pages/ShowResult";
import {ToastContainer} from 'react-toastify';
import ViewResult from "./pages/ViewResult";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <PrivateRoute role="admin" path='/dashboard' exact component={Dashboard}/>
                <PrivateRoute role="admin" path='/laboratory' exact component={Laboratory}/>
                <PrivateRoute role="admin" path='/sampling' exact component={Sampling}/>
                <PrivateRoute role="admin" path='/addresult' exact component={AddResult}/>
                <PrivateRoute role="admin" path='/addlab' exact component={AddLab}/>
                <PrivateRoute role="admin" path='/addloc' exact component={AddLocation}/>
                <PrivateRoute role="admin" path='/testResult/:id' exact component={ShowResult}/>
                <Route role="admin" path='/viewResult/:id' exact component={ViewResult}/>
            </Switch>

            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;
