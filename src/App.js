import React, {Component} from "react"
import './App.css';
import axios from 'axios'
import Party from "./components/Party.js"
import AvailableRecruits from "./components/AvailableRecrutis.js"
import CharacterViewer from "./components/CharacterViewer.js"
//hard coded URL, possibly belongs in CONFIG file
const baseUrl = "/api/tavern"



class App extends Component {
  constructor() {
    super()
    this.state = {
      characterList: [],
      partyList: [],
      protoChar: {
        name: '',
        backstory: '',
        img: '',
        health: '',
        attack: '',
        movement: '',
        range: '',
        armor: ''

    }
    }
    this.getRecruits = this.getRecruits.bind(this)
    this.makeRecruit = this.makeRecruit.bind(this)
    this.modifyRecruit = this.modifyRecruit.bind(this)
    this.deleteRecruit = this.deleteRecruit.bind(this)
    this.displayRecruit = this.displayRecruit.bind(this)
    this.moveToParty = this.moveToParty.bind(this)
    this.displayPartyMember = this.displayPartyMember.bind(this)
    this.deletePartyMember = this.deletePartyMember.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateBackstory = this.updateBackstory.bind(this)
    this.updateHealth = this.updateHealth.bind(this)
    this.updateArmor = this.updateArmor.bind(this)
    this.updateAttack = this.updateAttack.bind(this)
    this.updateMovement = this.updateMovement.bind(this)
    this.updateRange = this.updateRange.bind(this)
  }



  getRecruits() {
    axios.get(baseUrl, this.state.protoChar)
    .then( res => {
      console.log(res.data)
      this.setState({
        characterList: res.data
      })
    }).catch( err => {
      console.log(err)
    })
    this.setState({
      protoChar: {
        name: '',
         backstory: '',
         img: '',
         health: '',
         attack: '',
         movement: '',
         range: '',
         armor: ''

       }
     })
  }

  displayRecruit(id) {
    const index = this.state.characterList.findIndex( recruit => recruit.id === id)
    let char = this.state.characterList[index]
    this.setState({
      protoChar: char
    })
  }

  displayPartyMember(id) {
    const index = this.state.partyList.findIndex( recruit => recruit.id === id)
    let char = this.state.partyList[index]
    this.setState({
      protoChar: char
    })
  }

  moveToParty(id) {
    const index = this.state.characterList.findIndex( recruit => recruit.id === id)
    if(this.state.characterList[index]) {
     this.setState({
       partyList: [...this.state.partyList, this.state.characterList[index]]
     })
     axios.delete(`${baseUrl}/${id}`)
      .then( res => {
      this.setState({
        characterList: res.data
      })
    }).catch( err => {
      console.log(err)
    })
     this.setState({
       protoChar: {
         name: '',
          backstory: '',
          img: '',
          health: '',
          attack: '',
          movement: '',
          range: '',
          armor: ''

        }
      })
    }
  }

  makeRecruit() {
    axios.post(baseUrl, this.state.protoChar)
    .then( res => {
      this.setState({
        characterList: res.data
      })
    }).catch( err => {
      console.log(err)
    })
    this.setState({
      protoChar: {
         name: '',
         backstory: '',
         img: '',
         health: '',
         attack: '',
         movement: '',
         range: '',
         armor: ''

      }
    })
  }

  modifyRecruit(id) {
    axios.put(`${baseUrl}/${id}`, this.state.protoChar)
    .then( res => {
      console.log(res.data)
      this.setState({
        characterList: res.data
      })
    }).catch( err => {
      console.log(err)
    })
    this.setState({
      protoChar: {
         name: '',
         backstory: '',
         img: '',
         health: '',
         attack: '',
         movement: '',
         range: '',
         armor: ''

      }
    })
  }

  deleteRecruit(id) {
    axios.delete(`${baseUrl}/${id}`)
      .then( res => {
      this.setState({
        characterList: res.data
      })
    }).catch( err => {
      console.log(err)
    })
    this.setState({
      protoChar: {
         name: '',
         backstory: '',
         img: '',
         health: '',
         attack: '',
         movement: '',
         range: '',
         armor: ''

      }
    })
  }

  deletePartyMember(id) {
    const index = this.state.characterList.findIndex( recruit => recruit.id === id)
    let arr = this.state.partyList
    arr.splice(index, 1)
    this.setState({
      partyList: arr
    })
  }

  //////////handle updates////////4

  updateName(value) {
    this.setState({
      protoChar: {
        ...this.state.protoChar,
        name: value
      }
    })
  }

  updateBackstory(value) {
    this.setState({
      protoChar: {
        ...this.state.protoChar,
          backstory: value
      }
    })
  }

  updateHealth(value) {
    this.setState({
      protoChar: {
        ...this.state.protoChar,
          health: value
      }
    })
  }

  updateArmor(value) {
    this.setState({
      protoChar: {
        ...this.state.protoChar,
          armor: value
      } 
    })
  }

  updateAttack(value) {
    this.setState({
      protoChar: {
        ...this.state.protoChar,
          attack: value
      }
    })
  }

  updateMovement(value) {
    this.setState({
      protoChar: {
          ...this.state.protoChar,
          movement: value
      }
    })
  }

  updateRange(value) {
    this.setState({
      protoChar: {
        ...this.state.protoChar,
          range: value
      }
    })
  }


  render() {
   return (
      <div className="App">

        <div className="party">
          <Party
            delete={this.deletePartyMember}
            party={this.state.partyList}
            viewMember={this.displayPartyMember}
          />
       </div>

        <div className="viewer">
         <CharacterViewer
          createRecruit={this.makeRecruit}
          name={this.state.protoChar.name}
          backstory={this.state.protoChar.backstory}
          img={this.state.protoChar.img}
          health={this.state.protoChar.health}
          attack={this.state.protoChar.attack}
          movement={this.state.protoChar.movement}
          range={this.state.protoChar.range}
          armor={this.state.protoChar.armor}
          updateName={this.updateName}
          updateBackstory={this.updateBackstory}
          updateHealth={this.updateHealth}
          updateAttack={this.updateAttack}
          updateMovement={this.updateMovement}
          updateRange={this.updateRange}
          updateArmor={this.updateArmor}
          updateRecruit={this.modifyRecruit}
          characterForm={this.state.protoChar}
          hire={this.moveToParty}
         />
        </div>

       <div className="recruits">
          <AvailableRecruits
            viewOne={this.displayRecruit} 
            viewAll={this.getRecruits} 
            characters={this.state.characterList} 
            delete={this.deleteRecruit}
            
            />
        </div>

     </div>
   );
  }
}
export default App;
