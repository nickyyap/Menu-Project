import './App.css'
import { Card } from 'react-bootstrap';
import headerImg from "./assets/images/header-bg.jpg"
import logo from './assets/svg/logo.svg'
import friedChickenImg from './assets/images/fried-chicken.jpg'
import nuggets from './assets/images/nuggets.jpg'
import muffins from './assets/images/muffins.jpg'
import tiramisu from './assets/images/tiramisu.jpg'
import soyMilk from './assets/images/soy-milk.png'
import soda from './assets/images/soda.jpg'

function NutritionalInfo({ nutritionInfo }) {
  return (
    <div className="d-flex gap-3 border-top border-bottom">
      <div className="d-flex flex-column align-items-center">
        <p className="m-0"><strong>{nutritionInfo.calories}</strong></p>
        <p className="m-0">kcal</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <p className="m-0"><strong>{nutritionInfo.protein}</strong></p>
        <p className="m-0">Protein(g)</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <p className="m-0"><strong>{nutritionInfo.carbs}</strong></p>
        <p className="m-0">Carbs(g)</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <p className="m-0"><strong>{nutritionInfo.fat}</strong></p>
        <p className="m-0">Fat(g)</p>
      </div>
    </div>
  )
}

function AllergenInfo({ allergens }) {
  return (
    <div className="d-flex flex-wrap gap-2 mt-2">
      {allergens?.map((allergen, index) => (
        <span key={index} className="badge bg-warning text-dark">
          {allergen}
        </span>
      ))}

    </div>
  );
}

function RecommendInfo({ isRecommended }) {
  if (!isRecommended) {
    return null;
  }

  return (
    <span className="badge bg-success test-light fe-bold p-2">
      Most Ordered
    </span>
  );
}

function MenuItem({ name, price, foodImage, nutritionInfo, allergens, recommended }) {
  return (
    <>
      <Card style={{ width: '25rem' }} className="mx-3">
        <Card.Img variant="top" src={foodImage} className="mb-3" style={{ height: '25rem' }} />
        <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-3">
          <RecommendInfo isRecommended={recommended} />
          <Card.Title className="fw-bold">{name}</Card.Title>
          <NutritionalInfo nutritionInfo={nutritionInfo} />
          <AllergenInfo allergens={allergens} />
          <p className="price text-secondary"><strong>{price}</strong></p>
        </Card.Body>
      </Card>
    </>
  );
}

function Category({ title, foods }) {
  return (
    <div className="mx-3 mb-4">
      <h3 className="fw-bold m-0  ms-3">{title}</h3>
      <hr />
      <div className="w-100 d-flex flex-wrap gap-3">{foods}</div>
    </div>
  );
}

const friedChicken = (
  <>
    <MenuItem
      name={"2pcs Fried Chicken Set"}
      price={"RM 10.00"}
      foodImage={friedChickenImg}
      nutritionInfo={{ calories: 540, protein: 31, carbs: 35, fat: 29 }}
      allergens={['Halal']}
      recommended={true} />
    <MenuItem
      name={"6pcs Chicken Nugget"}
      price={"RM 6.00"}
      foodImage={nuggets}
      nutritionInfo={{ calories: 270, protein: 13, carbs: 16, fat: 16 }}
      allergens={['Halal']}
      recommended={false} />
  </>
);

const desserts = (
  <>
    <MenuItem
      name={"Banana Chocolate Muffin"}
      price={"RM 5.00"}
      foodImage={muffins}
      nutritionInfo={{ calories: 270, protein: 10, carbs: 20, fat: 5 }}
      allergens={['Milk']}
      recommended={false} />
    <MenuItem
      name={"Tiramisu Cake"}
      price={"RM 15.00"}
      foodImage={tiramisu}
      nutritionInfo={{ calories: 207, protein: 2, carbs: 40, fat: 10 }}
      allergens={['Coffee', 'Milk']}
      recommended={true} />
  </>
);

const beverages = (
  <>
    <MenuItem
      name={"Sparkling Lemon & Passion Fruits"}
      price={"RM 7.00"}
      foodImage={soda}
      nutritionInfo={{ calories: 100, protein: 0.5, carbs: 10, fat: 0.5 }}
      recommended={false} />
    <MenuItem
      name={"Fresh Soy Milk"}
      price={"RM 5.00"}
      foodImage={soyMilk}
      nutritionInfo={{ calories: 50, protein: 3, carbs: 7, fat: 1 }}
      recommended={true} />
  </>
);

function App() {
  return (
    <>
      <img src={headerImg} alt="header" className="w-100" style={{ maxHeight: '288px' }} />
      <div id="logo-container" className="d-flex flex-column align-items-center justify-content-center mb-3">
        <img src={logo} alt="logo" className="mb-3 border border-white rounded-circle border-4 img-fluid" style={{ margin: '-70px' }} />
      </div>
      <h1 className="fw-bold text-center mb-5">Uncle Haris Food Menu</h1>
      <Category title={"Fried Chicken"} foods={friedChicken} />
      <Category title={"Desserts"} foods={desserts} />
      <Category title={"Beverages"} foods={beverages} />
    </>
  );
}

export default App
