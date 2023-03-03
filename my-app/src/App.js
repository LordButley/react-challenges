import css from './App.module.css';
// import Sidebar from './components/Sidebar';
import SidebarClass from './components/SidebarClass';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <Sidebar /> */}
      {/* <Sidebar /> */}

      {/* <SidebarClass /> */}
      <SidebarClass anchorOne="Snaps" anchorTwo="Friends" />

    </div>
  );
}

export default App;