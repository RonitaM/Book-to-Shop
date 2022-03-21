import React, { Component } from 'react'
import { Card, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faSave, faUndo, faList, faEdit } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import MyToast from './MyToast'

class Book extends Component {
    constructor(props) {
        super(props)
        this.state = this.initialState;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    initialState = {
        id: '',
        name: '',
        category_id: '',
        price: '',
        description: '',
        added_on: '',
        price: '',
    }

    componentDidMount() {
        const bookId = +this.props.match.params.id;
        if (bookId) {
            this.findBookById(bookId);
        }
    }

    findBookById = (bookId) => {
        fetch("http://localhost:8080/api/v1/books/" + bookId)
            .then(response => response.json())
            .then((book) => {
                this.setState({
                    id: book.id,
                    name: book.name,
                    category_id: book.category_id,
                    added_on: book.added_on,
                    description: book.description,
                    price: book.price
                });
            }).catch((error) => {
                console.error("Error - " + error);
            });
    }
    submitBook = event => {
        event.preventDefault();
        const book = {
            name: this.state.name,
            category_id: this.state.category_id,
            description: this.state.description,
            added_on: this.state.added_on,
            price: this.state.price
        };

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch("http://localhost:8080/api/v1/books", {
            method: 'POST',
            body: JSON.stringify(book),
            headers
        })
        .then(response => response.json())
        .then((book) =>{
            if(book != null){
                this.setState({"show" : "true", "method" : "true"});
                setTimeout(() => this.setState({"show" : "false"}), 3000);
            }else{
                this.setState({"show" : "false"});
            }
        });
    }

    updateBook = event => {
        event.preventDefault();
        const book = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            category_id: this.state.category_id,
            added_on: this.state.added_on,
            price: this.state.price
        };
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        fetch("http://localhost:8081/api/v1/books", {
            method: 'PUT',
            body: JSON.stringify(book),
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
    resetBook = () => {
        this.setState(() => this.initialState);
    }

    bookChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    bookList = () => {
        return this.props.history.push("/list");
    }

    render() {
        const { name,description,added_on,category_id,price } = this.state;
        return (
            <div>
                <div style={{ "display": this.state.show ? "block" : "none" }}>
                    <MyToast show={this.state.show} message={this.state.method === "put" ? "Book updated successfully" : "Book saved successfully"} type={"success"} />
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update book" : "Add book "}
                    </Card.Header>
                    <Form onReset={this.resetBook} onSubmit={this.state.id ? this.updateBook : this.submitBook} id='bookFormId'>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId='formGridTitle'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name='name'
                                        value={name}
                                        onChange={this.bookChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId='formGridAuthor'>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name='price'
                                        value={price}
                                        onChange={this.bookChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter price" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId='formGridISBNNumber'>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name='description'
                                        value={description}
                                        onChange={this.bookChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter description" />
                                </Form.Group>
                                <Form.Group as={Col} controlId='formGridcoverPhotoURL'>
                                    <Form.Label>Added On</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="date" name='added_on'
                                        value={added_on}
                                        onChange={this.bookChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter Added_on date" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId='formGridLanguage'>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name='category_id'
                                        value={category_id}
                                        onChange={this.bookChange}
                                        className={'bg-dark text-white'}
                                        placeholder="Enter Category" />
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
                            <Button variant="info" type="button" onClick={this.bookList.bind()}>
                                <FontAwesomeIcon icon={faList} /> Book List
                        </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>


        )
    }
}

export default Book
