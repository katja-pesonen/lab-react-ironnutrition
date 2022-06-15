import './App.css';
import foodsJson from './foods.json';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Searchbar';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const [searchFood, setSearchFood] = useState('');


    const addNewFood = (newFood) => {
      const updatedFoods = [...foods, newFood];
     
      setFoods(updatedFoods);
    };

    // const deleteFood = (id) => {
    //   const filteredArray = contacts.filter((eachFood) => {
    //     return eachFood.id !== id;
    //   });
    //   setFoods([...filteredArray]);
    // };

  return (
    <div className="App">
       <AddFoodForm addNewFood = {addNewFood} /> 

      <Button> Hide Form / Add New Food </Button>

       <Search searchFood={searchFood} onSearch={setSearchFood}/> 

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods
        .filter((elem, i) => {
          return elem.name.toLowerCase().includes(searchFood.toLowerCase());
        })
        
        .map((elem, i) => {
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
