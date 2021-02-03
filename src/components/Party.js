import React, {Component} from 'react'
import Person from "./Person.js"



class Party extends Component {

   render(){
       return (
        <div className="partyNameList">
          <h1>Your Party:</h1>
            {this.props.party.map((elem) => {
              return <>
              <Person person={elem} viewOne={this.props.viewMember} delete={this.props.delete}/>
              </>
            })}
        </div>
       )
   }
}

export default Party