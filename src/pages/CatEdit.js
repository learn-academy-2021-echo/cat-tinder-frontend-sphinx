import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom';
import './CatEdit.css';
;


class CatEdit extends Component {
  constructor(props){ 
    super(props)
    let { name, age, enjoys, image } = this.props.cat;
    this.state = {
      newCat: {
        name: name ? name : undefined,
        age: age ? age : undefined,
        enjoys: enjoys ? enjoys : undefined,
        image: image ? image : undefined
      },
      submitted: false
    }
  }

  handleChange = (e) => { 
    let { newCat } = this.state
    newCat[e.target.name] = e.target.value
    this.setState({newCat: newCat})
  }

  handleSubmit = () => {
    this.props.updateCat(this.state.newCat, this.props.cat.id)
    this.setState({submitted: true})
  }


  render() {
    return(
    <div id="cat-edit-container">
      <h1>Edit your cat!</h1>
      <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.newCat.name}
            />
          </FormGroup>

          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={this.handleChange}
              value={this.state.newCat.age}
            />
          </FormGroup>

          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.newCat.enjoys}
            />
          </FormGroup>

          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.newCat.image}
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}>
            Edit Cat Profile
          </Button>
      </Form>
      {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`} />}

    </div>
    )
  }
}

export default CatEdit;
