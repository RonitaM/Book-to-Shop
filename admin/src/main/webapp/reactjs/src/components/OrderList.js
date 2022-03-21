import React, { Component } from 'react'
import { Card, Table, Image, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import axios from 'axios';
import MyToast from './MyToast'

class OrderList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        this.findAllOrders();
    }

    findAllOrders(){
        fetch("http://localhost:8080/api/v1/order")
            .then(response => response.json())
            .then((data) => {
                this.setState({ orders: data })
                console.log(data);
            });
    }

   

    render() {
        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                <Card.Body><FontAwesomeIcon icon={faList} /> Order List</Card.Body>
                <Card.Body>
                    <Table bordered hover striped variant='dark'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Order Date</th>
                                <th>User ID</th>
                                <th>Payment Type</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.orders.length === 0 ?
                                    <tr align='center'>
                                        <td colSpan='8'> Orders Placed </td>
                                    </tr> :
                                    this.state.orders.map((order) => (
                                        < tr key={order.id}>
                    
                                            <td>{order.id}</td>
                                            <td>{order.qty}</td>
                                            <td>{order.price}</td>
                                            <td>{order.order_date}</td>
                                            <td>{order.user_id}</td>
                                            <td>{order.payment_type}</td>
                                            <td>{order.delivery_address}</td>
                                            
                                          
                                        </tr>

                                    ))
                            }

                        </tbody>
                    </Table>
                </Card.Body>
            </Card >
            </div>
            
        )
    }
}

export default OrderList
