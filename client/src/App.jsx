import Layout from "./routes/Layout";
import { supabase } from "./utils/supabase";

function App() {
  console.log(supabase);
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
