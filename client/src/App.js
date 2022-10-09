import ApplicationRoutes from "./routes/routes";
import appCss from './App.css'
import {Chat} from "./components/chat/chat";

function App() {
  return (
    <div>
       <main>
          <ApplicationRoutes />
       </main>
    </div>
  );
}

export default App;
