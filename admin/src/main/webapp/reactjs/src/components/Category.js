import React, { Component } from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faSave, faUndo, faList, faEdit } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import MyToast from './MyToast'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = this.initialState;
        this.categoryChange = this.categoryChange.bind(this);
        this.submitCategory = this.submitCategory.bind(this);
    }

    initialState = {
        id: '',
        name: ''
    }

    componentDidMount() {
        const categoryId = +this.props.match.params.id;
        if (categoryId) {
            this.findCategoryById(categoryId);
        }
    }

    findCategoryById = (categoryId) => {
        fetch("http://localhost:8080/api/v1/category/" + categoryId)
            .then(response => response.json())
            .then((category) => {
                this.setState({
                    id: category.id,
                    name: category.name
                });
            }).catch((error) => {
                console.error("Error - " + error);
            });
    }
    submitCategory = event => {
        event.preventDefault();
        const category = {
            name: this.state.name
        };

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch("http://localhost:8080/api/v1/category", {
            method: 'POST',
            body: JSON.stringify(category),
            headers
        })
        .then(response => response.json())
        .then((category) =>{
            if(category != null){
                this.setState({"show" : "true", "method" : "true"});
                setTimeout(() => this.setState({"show" : "false"}), 3000);
            }else{
                this.setState({"show" : "false"});
            }
        });
    }

    updateCategory = event => {
        event.preventDefault();
        const category = {
            id: this.state.id,
            name: this.state.name
        };
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        fetch("http://localhost:8081/api/v1/category", {
            method: 'PUT',
            body: JSON.stringify(category),
            headers
        })
        .then(response => response.json())
        .then((book) => {
            if(book) {
                this.setState({"show":true, "method":"put"});
                setTimeout(() => this.setState({"show":false}), 3000);
                setTimeout(() => this.bookList(), 3000);
            } else {
                this.setState({"show":false});
            }
        });
        this.setState(this.initialState);
    };
    resetCategory = () => {
        this.setState(() => this.initialState);
    }

    categoryChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    categoryList = () => {
        return this.props.history.push("/category");
    }

    render() {
        const { name} = this.state;
        return (
            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast show={this.state.show} message={this.state.method === "put" ? "Book updated successfully" : "Book sav successfully"} type={"success"} />
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update book" : "Add book "}
                    </Card.Header>
                    <Form onReset={this.resetBook} onSubmit={this.state.id ? this.updateCategory : this.submitCategory} id='bookFormId'>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId='formGridTitle'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name='name'
                                        value={name}
                                        onChange={this.categoryChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter name" />
                                </Form.Group>
                                </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{ 'textAlign': 'right' }}>
                            <Button variant="primary" type="submit">
                                <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Save "}
                            </Button>{' '}
                            <Button variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                        </Button>
                            {' '}
                            <Button variant="info" type="button" onClick={this.categoryList.bind()}>
                                <FontAwesomeIcon icon={faList} /> Book List
                        </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>


        )
    }
}

export default Category;