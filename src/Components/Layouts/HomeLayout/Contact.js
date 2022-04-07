import React from 'react';
import { Card} from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import men from './images/men.jpg';

function Contact() {
    return(
        <div  className="justify-content space-around">
            <MediaQuery query="(min-width: 1224px)">
                <div style={{justifyContent: "space-between", display: "flex", margin: "80px"}}>
                    <Card style={{ width: '80%', padding: "10px" }}>
                        <Card.Img variant="top" src={men} />
                        <Card.Body>
                            <Card.Title>Sairaj Kodilkar</Card.Title>
                            <Card.Text>
                            <p>email : skodilkar7@gmail.com</p>
                            <p>phone : 7249750461</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                    <Card style={{ width: '80%' , padding: "10px"}}>
                        <Card.Img variant="top" src={men} />
                        <Card.Body>
                            <Card.Title>Rushikesh Deshmukhe</Card.Title>
                            <Card.Text>
                            <p>email : rdeshmukhe@gmail.com</p>
                            <p>phone : 7083659244</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 1224px)">
            <div style={{justifyContent: "space-between", display: "inline", margin: "80px"}}>
                <center>  
                    <Card style={{ width: '80%', padding: "10px" }}>
                        <Card.Img variant="top" src={men} />
                        <Card.Body>
                            <Card.Title>Sairaj Kodilkar</Card.Title>
                            <Card.Text>
                            <p>email : skodilkar7@gmail.com</p>
                            <p>phone : 7249750461</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                    <Card style={{ width: '80%' , padding: "10px"}}>
                        <Card.Img variant="top" src={men} />
                        <Card.Body>
                            <Card.Title>Rushikesh Deshmukhe</Card.Title>
                            <Card.Text>
                            <p>email : rdeshmukhe@gmail.com</p>
                            <p>phone : 7083659244</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </center>
                </div>
            </MediaQuery>
        </div>
    );
}

export default Contact;
