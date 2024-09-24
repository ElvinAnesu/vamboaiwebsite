import AppRoutes from "./routes";
import MyContextProvider from "./components/context/myContextProvider";

const App = () => {
  return (
    <MyContextProvider>
      <AppRoutes />
    </MyContextProvider>
  );
};
export default App;
