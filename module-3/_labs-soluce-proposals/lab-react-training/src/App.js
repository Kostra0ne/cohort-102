import React from 'react';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating';
import DriverCard from './Components/DriverCard';
import LikeButton from './Components/LikeButton';
import ClickablePicture from './Components/ClickablePicture';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Iteration 1 */}
      <h2 className="App__title">1. IdCard</h2>

      <IdCard
        firstName="Toto"
        lastName="Bar"
        gender="male"
        height={192}
        birth={new Date('2001-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        firstName="Toto"
        lastName="Bar"
        gender="male"
        height={192}
        birth={new Date('1900-07-14')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* Iteration 2 */}
      <h2 className="App__title">2. Greetings</h2>
      <Greetings lang="es">Tom</Greetings>
      <Greetings lang="de">Jennifer</Greetings>

      {/* Iteration 3 */}
      <h2 className="App__title">3. Random</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* Iteration 4 */}
      <h2 className="App__title">4. Box Color</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h2 className="App__title">5. Credit Card</h2>
      <div className="d-flex f-wrap">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      {/* Iteration 6 */}
      <h2 className="App__title">6. Rating</h2>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h2 className="App__title">7. Driver Card</h2>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />

      <h2 className="App__title">8. LikeButton</h2>

      <LikeButton />
      <LikeButton />

      <h2 className="App__title">9. ClickablePicture</h2>

      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
    </div>
  );
}

export default App;
