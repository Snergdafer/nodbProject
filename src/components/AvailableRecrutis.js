import React, {Component} from 'react'
import Person from "./Person.js"



class AvailableRecruits extends Component {
    componentDidMount() {
        this.props.viewAll()
    }

   render(){

       return (
           <div className="recNameList">
               <h1>Recruits:</h1>
               {this.props.characters.map((elem) => (
                   <>
                   <Person person={elem} viewOne={this.props.viewOne} viewAll={this.props.viewAll} delete={this.props.delete}/>
                   </>
               ))}
               <br/><button className="newRecruits" onClick={() => this.props.viewAll()}>Get New Recruits</button>
               
           </div>
       )
   }
}

export default AvailableRecruits