import {Container,Row,Col,Form,InputGroup,Button } from "react-bootstrap"
import { useState } from 'react';
import './App.css';

function App() {
  const enviarForm =(e)=>{
        //importante poner esto para no envie cosas el server
        e.preventDefault();   
        
        let [peso,altura] = e.target.elements
        peso = peso.value
        altura = altura.value


        CalcularBMI(peso,altura)

        
  }
  const CalcularBMI=(peso,altura)=>  {
    let resultadoCalculado = 0
    resultadoCalculado = peso /(altura*altura)
    console.log(`RC ${resultadoCalculado}`);
    PasarDeIMCaNIvelesDePeso(resultadoCalculado)

  }
  const [mostrarEnPantalla,setMostrarEnPantalla] = useState("")
  const PasarDeIMCaNIvelesDePeso = (resultadoCalculado)=>{


    if (resultadoCalculado < 18.5) {
      setMostrarEnPantalla("Bajo peso")

    } else if (resultadoCalculado < 24.9) {
      setMostrarEnPantalla("Normal")

    } else if (resultadoCalculado < 29.9){
      setMostrarEnPantalla("Sobrepeso")


    } else if (resultadoCalculado > 30){
      setMostrarEnPantalla("Obesidad")

    }
  
  }

  return (
    <Container className="App">
      <h1>Calculadora BMI con react</h1>
      <Row>
        <Col>
        <Form onSubmit={enviarForm}>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Coloque su peso en Kilogramos(Kg)</InputGroup.Text>

        <Form.Control
          placeholder="Su peso en Kg"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          name="peso"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Coloque su estatura en metros</InputGroup.Text>
        <Form.Control
          placeholder="Su peso en Kg"          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          name="altura"
        />
      </InputGroup>       
      <Button className='mb-3' type='submit' variant="warning">Calcular</Button>      
        </Form>

        </Col>
        <Col>
        <h2>Tu nivel de peso es <b>{mostrarEnPantalla}</b> </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
