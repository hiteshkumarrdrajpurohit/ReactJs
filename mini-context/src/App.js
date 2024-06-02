import LogIn from "./components/LogIn";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
    <div  style={{backgroundColor:"gray"}}>
      <h1>React with us</h1>
      <LogIn/>
      <Profile/>
    </div>
    </UserContextProvider>
  );
}

export default App;
