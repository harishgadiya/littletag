import React, { useState } from "react";
import Modal from "bootstrap/Modal";
import { Button, Checkbox, Container, Radio } from "../components/atoms";
import {
	AddressCard,
	CategoryCard,
	CheckoutCard,
	ProductCard,
} from "../components/molecules";
import Hero from "../components/organisms/Hero";

const Home = () => {
  const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<Hero />
				</div>
			</div>
			<Container>
				<div className="d-flex flex-column align-items-center">
					{/* <Button variant="primary" onClick={() => handleShow} text="try launching modal" >
					</Button> */}
          <Modal
            title="this is modal title"
            handleShow={handleShow}
            handleClose={handleClose}
            isVisible={show}
          >
            this is body 
          </Modal>
					<CategoryCard />
					<AddressCard />
					<CheckoutCard />
					<Checkbox label="checkbox 1" />
					<Checkbox label="checkbox 2" />
					<Radio name="durgesh" label="Radio 1" />
					<Radio name="durgesh" label="Radio 2" />
					<ProductCard />
					<CheckoutCard />
				</div>
			</Container>
		</>
	);
};

export default Home;
