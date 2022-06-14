import "./App.css";
import Testimony from "./components/Testimony";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <h1>This is what our students says:</h1>
        <Testimony
          name="Jennifer Karlson"
          image="emma"
          work="Blockchain Developer"
          testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor odio id viverra porttitor. Duis convallis, ante id varius finibus, sapien leo lobortis elit, vitae hendrerit massa neque eget libero. In sed lobortis neque, nec gravida massa. Integer ipsum lectus, sodales et gravida in, dignissim vel dui."
        />
        <Testimony
          name="Ko Kun"
          image="shawn"
          work="Web3 Developer"
          testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor odio id viverra porttitor. Duis convallis, ante id varius finibus, sapien leo lobortis elit, vitae hendrerit massa neque eget libero. In sed lobortis neque, nec gravida massa. Integer ipsum lectus, sodales et gravida in, dignissim vel dui."
        />
        <Testimony
          name="Carlos Don Uts"
          image="sarah"
          work="Metaverse Developer"
          testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor odio id viverra porttitor. Duis convallis, ante id varius finibus, sapien leo lobortis elit, vitae hendrerit massa neque eget libero. In sed lobortis neque, nec gravida massa. Integer ipsum lectus, sodales et gravida in, dignissim vel dui."
        />
      </div>
    </div>
  );
}

export default App;
