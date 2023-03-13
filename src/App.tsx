import "@patternfly/react-core/dist/styles/base.css";
import {Navbar} from './components/Navbar';
import './styles/App.scss';
import RoutingPage from "./components/RoutingPage";

const App = () => {
  return (
      <Navbar>
        <RoutingPage/>
      </Navbar>
  )
}

export default App
