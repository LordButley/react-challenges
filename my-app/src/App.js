import css from './App.module.css';
import NavBarForm from './components/NavBarForm';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
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
      {/* <NavBarForm /> */}
      {/* <RenderingLists /> */}
      <NavBarForm />
      <Sidebar />
      <Content />
      {/* <LifeCyclesCDM /> */}
      
    </div>
  );
}

export default App;