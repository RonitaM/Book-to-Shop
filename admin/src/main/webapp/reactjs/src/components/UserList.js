import React, { Component } from 'react'
import { Card, Table, Image, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import axios from 'axios';
import MyToast from './MyToast'

class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.findAllUsers();
    }

    findAllUsers(){
        fetch("http://localhost:8080/api/v1/user")
            .then(response => response.json())
            .then((data) => {
                this.setState({ users: data })
                console.log(data);
            });
    }

   

    render() {
        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                <Card.Body><FontAwesomeIcon icon={faList} /> UserList</Card.Body>
                <Card.Body>
                    <Table bordered hover striped variant='dark'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.length === 0 ?
                                    <tr align='center'>
                                        <td colSpan='4'> Users Registered</td>
                                    </tr> :
                                    this.state.users.map((user) => (
                                        < tr key={user.id}>
                    
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.mobile}</td>
                                            
                                            
                                          
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

export default UserList
