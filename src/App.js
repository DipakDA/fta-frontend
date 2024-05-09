import './App.css';
import { FamilyMemberCreateForm } from './ui-components';
import NavbarComponent from './components/NavbarComponent';
import CreateProfileForm from './components/CreateProfileForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent/>
        <CreateProfileForm/>
      </header>
    </div>
  );
}

export default App;
