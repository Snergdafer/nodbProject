import React, {Component} from 'react'




class CharacterViewer extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: props.characterForm.name,
    //         backstory: props.characterForm.backstory,
    //         img: props.characterForm.img,
    //         health: props.characterForm.health,
    //         attack: props.characterForm.attack,
    //         movement: props.characterForm.movement,
    //         range: props.characterForm.range,
    //         armor: props.characterForm.armor,
    //         id: props.characterForm.id
    //     }
    //     this.updateName = this.updateName.bind(this)
    //     this.updateBackstory = this.updateBackstory.bind(this)
    //     this.updateHealth = this.updateHealth.bind(this)
    //     this.updateArmor = this.updateArmor.bind(this)
    //     this.updateAttack = this.updateAttack.bind(this)
    //     this.updateMovement = this.updateMovement.bind(this)
    //     this.updateRange = this.updateRange.bind(this)
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     if(this.props !== prevProps) {
    //         this.setState({
    //             name: this.props.characterForm.name,
    //             backstory: this.props.characterForm.backstory,
    //             img: this.props.characterForm.img,
    //             health: this.props.characterForm.health,
    //             attack: this.props.characterForm.attack,
    //             movement: this.props.characterForm.movement,
    //             range: this.props.characterForm.range,
    //             armor: this.props.characterForm.armor,
    //             id: this.props.characterForm.id
    //         })
    //     }
    // }
    

    // updateName(value) {
    //     this.setState({
    //         name: value
    //     })
    //   }

    //   updateBackstory(value) {
    //     this.setState({
         
    //           backstory: value
    
    //     })
    //   }
    
    //   updateHealth(value) {
    //     this.setState({
            
    //           health: value
            
    //     })
    //   }
    
    //   updateArmor(value) {
    //     this.setState({
          
    //           armor: value
            
    //     })
    //   }
    
    //   updateAttack(value) {
    //     this.setState({
        
    //           attack: value
            
    //     })
    //   }
    
    //   updateMovement(value) {
    //     this.setState({
         
    //           movement: value
            
    //     })
    //   }
    
    //   updateRange(value) {
    //     this.setState({
           
    //           range: value
            
    //     })
    //   }

   render(){
       return (
           <div className="characterViewer">

            <div className="bio">
                <span className="info"><input type="text" value={this.props.name} onChange={ e => this.props.updateName(e.target.value)}/></span>
                <p className="info"><textarea className='backstory' type="text" value={this.props.backstory} onChange={ e => this.props.updateBackstory(e.target.value)}/></p>
            </div>
            <div className="picture">
                <img src={this.props.characterForm.img}/>
            </div>
            <div className="stats">
                <div className="viewerButtons">Stats:
                    <button className="viewButton" onClick={() => this.props.hire(this.props.characterForm.id)}>HIRE</button>
                    <button className="viewButton"onClick={() => this.props.updateRecruit(this.props.characterForm.id)}>Edit</button>
                    <button className="viewButton"onClick={() => this.props.createRecruit()}>Make Your Own</button>
                </div>
                <div>
                    <span className="info">Health: <input type="text" value={this.props.health} onChange={ e => this.props.updateHealth(e.target.value)}/></span>
                    <span className="info">Armor: <input type="text" value={this.props.armor} onChange={ e => this.props.updateArmor(e.target.value)}/></span>
                    <span className="info">Attack: <input type="text" value={this.props.attack} onChange={ e => this.props.updateAttack(e.target.value)}/></span><br/>
                    <span className="info">Movement: <input type="text" value={this.props.movement} onChange={ e => this.props.updateMovement(e.target.value)}/></span>
                    <span className="info">Range: <input type="text" value={this.props.range} onChange={ e => this.props.updateRange(e.target.value)}/></span>
                </div>
            </div>

           </div>
       )
   }

}

export default CharacterViewer