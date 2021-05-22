import { useEffect, useState } from "react";
import { Body, Button, Container, Image, Price, Title } from "../../components/atoms";
import firebase from '../../config/firebase-config';

const ProductDetail = props => {
    const [product , setProduct] = useState({});

    useEffect(() => {
        const productRef = firebase.database().ref('products');
        productRef.on('value', (snapshot) => {
            const products = snapshot.val();
            console.log(products, '>>>>>>>');
            setProduct(products['-Ma-62BeEXyOeArByzTg'][props.match.params.id]);
        })
    }, [])

    const { image, title, description, price } = product;
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Image
                        className='product-image'
                        {...{ src: image, alt: 'pics' }}
                    />
                </div>
                <div className="col-6">
                <div className='description-area'>
                    <Title {...{ text: title }} />
                    <Body {...{ text: description }} />
                    <Price {...{ currentPrice: price, previousPrice: price }} />
                    <div className='action-buttons'>
                        <Button {...{ text: 'Add to cart', type: 'outline' }} />
                        <Button {...{ text: 'Buy now' }} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
