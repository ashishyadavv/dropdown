import Dropdown from "./Dropdown";


export default function App() {
  const options = [
    { value: "green", label: "Yes" },
    { value: "blue", label: "Probably not" },
    
  ];

  return (
    <div className="App">
      <Dropdown
        isSearchable
        isMulti
        placeHolder="Select"
        options={options}
        onChange={(value) => console.log(value)}
      />

      
    </div>
  );
}
