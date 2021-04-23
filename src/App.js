import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Others from "./Others";
import { useProductsContext } from "./Context";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CvForm from "./CvForm";
import Button from "react-bootstrap/Button";
function App() {
  const {
    personal,
    experience,
    education,
    others,
    addEducationInfo,
  } = useProductsContext();

  return (
    <main>
      <h2>
        CV Editor
        <Button
          variant='link'
          onClick={() => {
            localStorage.setItem("personal", JSON.stringify(personal));
            localStorage.setItem("education", JSON.stringify(education));
            localStorage.setItem("experience", JSON.stringify(experience));
            localStorage.setItem("others", JSON.stringify(others));
          }}
        >
          Save
        </Button>
      </h2>

      <Personal />
      {education.length === 0 ? (
        <Button variant='info' onClick={() => addEducationInfo()}>
          {" "}
          Add Education
        </Button>
      ) : (
        education?.map((item) => <Education item={item} />)
      )}
      {experience?.map((item) => (
        <Experience item={item} />
      ))}
      {others?.map((item) => (
        <Others item={item} />
      ))}
      <div>
        <CvForm />
      </div>
    </main>
  );
}

export default App;
