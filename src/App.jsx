import { Toaster } from "react-hot-toast";
import Container from "./components/Container";
import Gallery from "./pages/home/Gallery";

const App = () => {
  return (
    <div className="bg-blue-50 min-h-screen md:p-10 p-5">
      <Container>
        <Gallery />
        <Toaster position="top-center" reverseOrder={false} />
      </Container>
    </div>
  );
};

export default App;
