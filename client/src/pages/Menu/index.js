import React from 'react';
// import { Header, Message } from "semantic-ui-react";
import "./menu.css"
import { Row, Col, Container, CardImg } from "reactstrap"
export const Menu = () => {
  return (
    <>

      <div className="menu-food">
        {/* first row */}
        <div className="row">
          <div className="col-sm-12">
            <h1 className="our-menu">Our Menu</h1>
          </div>
        </div>

        {/* second row */}
        <div className="row">
          {/* picture col */}
          <div className="col-sm-4">
            <img className="right-seaf-pic" src="https://res.cloudinary.com/cantando/image/upload/v1598062219/potato-skins_lqsoie.jpg"></img>
          </div>
          {/* salad menu col */}
          <div className="col-sm-4">
            <ul className="food-sections">
              <h3 className="menu-h3">Salads</h3>
              <li>

                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Ceasar</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Bruschetta</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Spinach Salad</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Meatball Sub</span>
                </label>
              </li>
            </ul>
          </div>
          {/* picture col */}
          <div className="col-sm-4">
            <img className="seaf-pic" src="https://res.cloudinary.com/cantando/image/upload/e_oil_paint:30/a_0/v1598326780/1485748477-caprese-chicken_v59bso.jpg"></img>
          </div>
        </div>


        {/* Third Row  */}

        <div className="row">
          {/* col image */}
          <div className="col-sm-4">  <img className="right-seaf-pic" src="https://res.cloudinary.com/cantando/image/upload/e_oil_paint:30/a_0/v1598062654/26177579_n9gptk.jpg"></img></div>
          {/* col panini */}
          <div className="col-sm-4">
            <ul className="food-sections">
              <h3 className="menu-h3">Panini</h3>
              <li>

                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Caprese Panini</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Eggplant Panini</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Grilled Chicken Panini</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Meatball Sub</span>
                </label>
              </li>
            </ul>
          </div>
          {/* col image */}
          <div className="col-sm-4"> <img className="seaf-pic" src="https://res.cloudinary.com/cantando/image/upload/v1598326779/lasagne-alla-bolognese.1000x1000-800x800_qpo9md.jpg"></img> </div>
        </div>

        <br />


        {/* Fourth Row  */}

        <div className="row">
          <div className="col-sm-4">
            <img className="right-seaf-pic" src="https://res.cloudinary.com/cantando/image/upload/v1598062631/img_7301-scaled_vm8fbo.jpg"></img>
          </div>
          <div className="col-sm-4">
            <ul className="food-sections" >

              <h3 className="menu-h3" >Pasta</h3>
              <li>

                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Luiguini Marinara</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Fettucini Alfredo</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Rigatoni Bolognese</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Cheese Ravioli</span>
                </label>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <img className="seaf-pic" src="https://res.cloudinary.com/cantando/image/upload/v1598062117/538798d3eab8eae80cb36475_b31hdi.jpg"></img>
          </div>
        </div>


        {/* Fifth Row  */}

        <div className="row">
          <div className="col-sm-4">
            <img className="right-seaf-pic" src="https://res.cloudinary.com/cantando/image/upload/v1598062580/Rustic-Italian-Tortellini-Soup_EXPS_DIYD19_41101_E04_30_6b_nabi39.jpg"></img>
          </div>
          <div className="col-sm-4">
            <ul className="food-sections">
              <h3 className="menu-h3" >Chicken</h3>
              <li>

                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Chicken Francese</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Chicken Alfredo</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Chicken Parmigiana</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" />
                  <span className="icon"></span>
                  <span className="list">Breaded Chicken </span>
                </label>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <img className="seaf-pic" src="https://res.cloudinary.com/cantando/image/upload/v1598062154/th_cvp2kh.jpg"></img>
          </div>
        </div>





      </div>


    </>
  )
}

export default Menu;
