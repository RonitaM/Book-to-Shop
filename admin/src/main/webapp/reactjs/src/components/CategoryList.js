import React, { Component } from 'react'
import { Card, Table, Image, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import axios from 'axios';
import MyToast from './MyToast'

class CategoryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: []
        }
    }

    componentDidMount() {
        this.findAllCategory();
    }

    findAllCategory(){
        fetch("http://localhost:8080/api/v1/category")
            .then(response => response.json())
            .then((data) => {
                this.setState({ category: data })
                console.log(data);
            });
    }

    

    render() {
        return (
            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast show = {this.state.show} message = {"Category deleted successfully"} type={"danger"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                <Card.Body><FontAwesomeIcon icon={faList} /> Category List</Card.Body>
                <Card.Body>
                    <Table bordered hover striped variant='dark'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.category.length === 0 ?
                                    <tr align='center'>
                                        <td colSpan='2'> Categories Available</td>
                                    </tr> :
                                    this.state.category.map((category) => (
                                        < tr key={category.id}>
                    
                                            <td>{category.id}</td>
                                            <td>{category.name}</td>


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

export default CategoryList
