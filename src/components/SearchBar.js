import { useState } from "react";

function SearchBar({ onSubmit }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit('cars');
  };

  const [term, setTerm] = useState('');

  function handleChange (event){
  setTerm(event.target.value+1);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default SearchBar;
