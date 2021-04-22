import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Others from "./Others";
import { useProductsContext } from "./Context";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { experience, education, others } = useProductsContext();
  return (
    <main>
      <h2>CV Editor</h2>
      <Personal />
      {education?.map((item) => (
        <Education item={item} key={item.id} />
      ))}

      {experience?.map((item) => (
        <Experience item={item} key={item.id} />
      ))}

      {others?.map((item) => (
        <Others item={item} key={item.id} />
      ))}
    </main>
  );
}

export default App;
