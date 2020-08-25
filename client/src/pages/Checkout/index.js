import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, CardImage, CardImg} from 'reactstrap';

const Checkout = (props) => {
    return (
      <Form>
   
   <FormGroup>
   <label className="check-title">Checkout</label>
   </FormGroup>

        <FormGroup>
         
          <Label className="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
        </FormGroup>
        <FormGroup>
          
          <Label for="exampleAddress2">Address 2</Label>
          <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <Button>Place Order</Button>
        <CardImg className="checkout-pic" src="https://res.cloudinary.com/cantando/image/upload/v1598062556/Italian-Restaurant-Brooklyn-NYC_rdzdpc.jpg">

      </CardImg>
    
        
      </Form>
      
    );
  }
  
  export default Checkout;