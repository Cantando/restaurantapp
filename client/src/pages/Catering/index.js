import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Container, Row, Col,
} from 'reactstrap';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { Link } from "react-router-dom";



function Catering() {
    return (
        <Container>

            <h1 className="cat-title">ALL PACKAGES CAN BE CUSTOMIZED</h1>
            <Row>
                <Col md={6}>


                    <Card>
                        <CardBody>
                            <CardImg className="cater-pic" src="https://i.insider.com/538798d3eab8eae80cb36475">

                            </CardImg>
                            <CardTitle>
                                Pasta Package
                            </CardTitle>
                            <CardText>
                                Salad, Pasta, Dessert For 25 people
                            </CardText>
                            <Link to="/Checkout"><Button>
                                Add To Cart
                            </Button></Link>


                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardBody>
                            <CardImg className="cater-pic" src="https://tse2.mm.bing.net/th?id=OIP.hKkk-G6quTHf1VcLPKfL9gHaFj&pid=Api&P=0&w=212&h=160">
                            </CardImg>
                            <CardTitle>
                                Meat Package
</CardTitle>
                            <CardText>
                                Salad, Assortment Of Meats, And Dessert For 25 people
</CardText>
                            <Link to="/Checkout"><Button>
                                Add To Cart
                            </Button></Link>


                        </CardBody>
                    </Card>
                </Col>

            </Row>
            <br></br>
            <Row>
                <Col md={6}>


                    <Card>
                        <CardBody>
                            <CardImg className="cater-pic" src="http://thehalalfoodblog.com/wp-content/uploads/2018/04/Mr-Wholly-Part-II-24-Tom-Yum-1170x780.jpg">

                            </CardImg>
                            <CardTitle>
                                Seafood Package
</CardTitle>
                            <CardText>
                                Salad, Seafood Medley, And Dessert For 25 people
</CardText>
                            <Link to="/Checkout"><Button>
                                Add To Cart
                            </Button></Link>


                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>


                    <Card>
                        <CardBody>
                            <CardImg className="cater-pic" src="https://parade.com/wp-content/uploads/2015/05/potato-skins.jpg">

                            </CardImg>
                            <CardTitle>
                                Appetizer Package
</CardTitle>
                            <br></br>
                            <CardText>
                                Salad, Apetizer Assortments, Dessert For 25 people
</CardText>
                            <Link to="/Checkout"><Button>
                                Add To Cart
                            </Button></Link>


                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>





    )


}
export default Catering;