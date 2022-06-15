import { Card, Col, Button } from 'antd';
// import deleteFood from '../App';

// Iteration 2
function FoodBox(props) {


    const {name, image, calories, servings} = props.foods
    const {handleDelete} = props.handleDelete

  return (
    <Col>
    <Card
      title={name}
      style={{ width: 230, height: 300, margin: 10 }}
    >
      <img src={image} height={60} alt="food" />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {calories * servings} </b> kcal
      </p>
      <Button type="primary" 
          onClick={handleDelete}> Delete 🗑️</Button>
    </Card>
  </Col>
  );
}

export default FoodBox;