import './App.css';
import foodsJson from './foods.json';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import FoodBox from './components/Foodbox';

function App() {
  const [foods, setFoods] = useState(foodsJson);


  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((elem, i) => {
          return (
            < FoodBox 
              foods = {elem}
              key = {elem.name + i}
            />
          )
        })}
      </Row>
    </div>
  );
}

export default App;
