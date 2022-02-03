import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import './CatNew.css'

class CatNew extends Component {
 constructor(props){
   super(props)
   this.state = {
     newCat: {
       name: "",
       age: "",
       enjoys: "",
       img: ""
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
   this.props.createCat(this.state.newCat)
   this.setState({submitted: true})
 }

  render() {
    return(
    <div>
      <h2 id='catnewtitle'>Add a new friend to our directory!</h2>

      <Form id='inputform'>
        <FormGroup>
          <Label for="name">Cat Name</Label>
          <Input
            id='input'
            type="text"
            name="name"
            placeholder="Please enter your cat's name."
            onChange={this.handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="age">Cat Age</Label>
          <Input
            id='input'
            type="number"
            name="age"
            placeholder='How old is your cat?'
            onChange={this.handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="enjoys">Cat's Hobbies</Label>
          <Input
            id='input'
            type="text"
            name="enjoys"
            placeholder='What does your cat enjoy doing?'
            onChange={this.handleChange}
            />
        </FormGroup>
        
        <FormGroup>
          <Label for="img">Your favorite photo of your pet.</Label>
          <Input
            id='input'
            type="url"
            name="img"
            placeholder='Insert url here.'
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button id='addcatbutton' onClick={this.handleSubmit} name = 'submit'>Add your cat.</Button>
      </Form>
      {this.state.submitted && <Redirect to='/catindex'/> }
    </div>
    )
  }
}

export default CatNew;
