import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

function Cards(props) {
    return (
        // <CardColumns style={{margin: "10px"}}>
        <div>
        <CardDeck style={{margin: "18px"}}>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/homemade.jpg" alt="Card image cap" height="220px"/>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/home_dec.png" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/invitation.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/birthday.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
        </CardDeck>
        <CardDeck style={{margin: "18px"}}>
        <Card className="hcard">
            <CardImg top width="100%" src="./images/homemade.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/home_dec.png" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/invitation.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/birthday.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
        </CardDeck>
        <CardDeck style={{margin: "18px"}}>
        <Card className="hcard">
            <CardImg top width="100%" src="./images/homemade.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/home_dec.png" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/invitation.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/birthday.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
        </CardDeck>
        <CardDeck style={{margin: "18px"}}>
        <Card className="hcard">
            <CardImg top width="100%" src="./images/homemade.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/home_dec.png" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/invitation.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/birthday.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
        </CardDeck>
        <CardDeck style={{margin: "18px"}}>
        <Card className="hcard">
            <CardImg top width="100%" src="./images/homemade.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/home_dec.png" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/invitation.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
          <Card className="hcard">
            <CardImg top width="100%" src="./images/birthday.jpg" alt="Card image cap" height="220px" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"><p class="price">₹1,000 <span className="atlprice">₹2,000</span><span className="discount"> 50% off</span></p></CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button className="leftbtn"><b>+</b> Wishlist</Button>
              <Button className="rightbtn"><b>+</b> Cart</Button>
            </CardBody>
          </Card>
        </CardDeck>
        </div>
        // {/* </CardColumns> */}
      );
}

export default Cards;