import React, { useEffect, useState } from 'react';

// API Fetching
import axios from 'axios'
//Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//Reducer
import { useSelector, useDispatch } from 'react-redux'
import add from '../actions/action';

function Products() {


    const { cart } = useSelector(state => state.updateCart)
    const dispatch = useDispatch()
    console.log(cart);


    const send = (list) => {
        dispatch(add(list))
    }

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setData(res.data)
            })

    }, [])



    return (
        <>
            <div className='ms-5 mt-5 row d-flex gap-5'>

                {
                    data && data.map(list => (
                        <Card key={list.id} style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={list.image} style={{ width: '10rem', height: "10rem" }} />
                            <Card.Body>

                                <ListGroup variant="flush">
                                    <ListGroup.Item>{list.title}</ListGroup.Item>
                                    <ListGroup.Item>Price : ${list.price}</ListGroup.Item>
                                    <ListGroup.Item>Rating: {list.rating.count}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button variant="primary" onClick={() => send(list)}>Add to cart</Button>
                                    </ListGroup.Item>
                                </ListGroup>

                            </Card.Body>
                        </Card>
                    ))

                }

            </div>
        </>
    );
}

export default Products;