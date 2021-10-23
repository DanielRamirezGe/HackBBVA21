
import React from "react";
import { NavBar} from "../../components/navBar";
import { Carousel, Image, Card, Button } from "react-bootstrap";
import { useState} from "react";
export const Home = () => {

   
    
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
  return (
    <div>
        <NavBar nombreAdscripcionUsuario="Usario" />
        <Carousel variant="dark" >
            <Carousel.Item>
                <Image src="https://static.comunicae.com/photos/notas/1220121/1606469651_captio_and_bbva.png" fluid />
                <Carousel.Caption>
                <Card style={{ marginBottom: '20rem', width: '25rem' }} variant="top" >
                    <Card.Body style={{textAlign:'left'}}>
                        <Card.Title>¿Eres Pyme?</Card.Title>
                        <Card.Text>
                        Tenemos una cuenta de ahorros ideal para ti,  regístrate y abre tu cuenta en solo 3 minutos.
                        </Card.Text>
                        <div className="float-left">
                        <Button  variant="primary" style={{ width: '15rem' }}>Registrate</Button>

                        </div>
                    </Card.Body>
                </Card>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}








