import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EditProfile from './pages/EditProfile';
import Dashboard from './components/Dashboard';
import TesMinat from './pages/TesMinat';
import PengembanganSkill from './pages/PengembanganSkill';
import PeluangKarir from './pages/PeluangKarir';
import ProgresPengembangan from './pages/ProgresPengembangan';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tes-minat" component={TesMinat} />
        <Route path="/pengembangan-skill" component={PengembanganSkill} />
        <Route path="/peluang-karir" component={PeluangKarir} />
        <Route path="/progres-pengembangan" component={ProgresPengembangan} />
      </Switch>
    </Router>
  );
}

export default Routes;
