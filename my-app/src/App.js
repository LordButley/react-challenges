import css from './App.module.css';
// import Sidebar from './components/Sidebar';
// import SidebarClass from './components/SidebarClass';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <Sidebar /> */}
      {/* <Sidebar /> */}

      {/* <SidebarClass /> */}
      {/* <SidebarClass anchorOne="Snaps" anchorTwo="Friends" /> */}
      <NavBarSimple name="Josh" />

    </div>
  );
}

export default App;