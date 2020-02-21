import React, { Component } from "react";
import './App.css'
import Person from './Person/Person'
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "a", name: "brahim", age: 22 },
      { id: "b", name: "ahmed", age: 26 },
      { id: "c", name: "med", age: 22 },
      { id: "d", name: "elhamed", age: 21 }

    ],
    showPersons: true
  }

  switchNamehandler = () => {
    console.log("Button was clicked !!")
    const newPersons = [...this.state.persons]//spread operator
    newPersons[0].name = "celeba5chour"
    this.setState({
      persons: newPersons
    })
  }
  changeNameHandler = (event, person) => {
    const newPersons = [... this.state.persons]
    const index = newPersons.indexOf(person)
    newPersons[index].name = event.target.value

    this.setState({
      persons: newPersons
    })

  }
  showPersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deleteNameHandler = (person) => {

    const newPerson = [...this.state.persons]
    const index = newPerson.indexOf(person)
    newPerson.splice(index, 1)
    this.setState({
      persons: newPerson
    })
  }



  render() {
    let personsComponents = null

    if (this.state.showPersons)
      personsComponents = (
        <div>
          {this.state.persons.map((person) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                changed={(event) => { this.changeNameHandler(event, person) }}
                delete={() => { this.deleteNameHandler(person) }}
                key={person.id} />

            )
          })}

        </div>
      )

    return (
      <div className="App">
        <h1>Hello React !!</h1>
        <button onClick={this.switchNamehandler}>Switch Name</button>
        <button onClick={this.showPersons}>toggle persons</button>
        {personsComponents}

      </div>
    )
  }
}
export default App