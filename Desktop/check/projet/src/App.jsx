
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nom from './componemts/nom/Nom';
import Prix from './componemts/prix/Prix';
import Discription from './componemts/discription/Discription';
import { Card, Image } from 'react-bootstrap';

function App() {

  return (
    <>
      <Nom />
      <Prix />
      <Discription />
      <Image />
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title><Nom /></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default App
