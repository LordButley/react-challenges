import css from './App.module.css';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.NavBar}>
     {/* <div  className="App"> */}
      {/* Add your components here */}
      {/* <Sidebar /> */}
      {/* <Sidebar /> */}
      {/* <SidebarClass /> */}
      {/* <SidebarClass anchorOne="Snaps" anchorTwo="Friends" /> */}
      {/* <NavBarSimple name="Josh" /> */}
      {/* <EventsClass /> */}
      {/* <EventsFunctional /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <ConditionalRenderingFunctional connected={true}/> */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent /> */}
      <NavBarForm />
    
    </div>
  );
}

export default App;