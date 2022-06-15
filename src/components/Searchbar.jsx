
import { Divider, Input } from 'antd';

// Iteration 5
function Search({SearchFood, onSearch}) {
    const handleChange = (e) => {
        onSearch(e.target.value);
    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={SearchFood} type="text" onChange={handleChange} />
    </>
  );
}

export default Search;