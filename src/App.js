import User from "./components/User";
import MultiStep from 'react-multistep'


function App() {
  return (

    <div className=" bg-gray-300 w-full min-h-screen flex flex-col items-center justify-center">
      <User />
    </div>

  );
}

export default App;
export { MultiStep };