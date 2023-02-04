
import React, { Component } from 'react'

 class Person extends Component {
    constructor(){
        super()
        this.state = {
          fullName: "Horchani Wided",
          bio: "Licence appliquée en informatique de gestion",
          imgSrc:
            "https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg",
          profession: "Web devoloper",
          show: true,
          count:0
        };
    }
  render() {
    return (
      <div>
        <h1 id="count">{this.state.count}</h1>
        <h1>{this.state.fullName}</h1>
        <h1>{this.state.bio}</h1>
        <h1>{this.state.profession}</h1>
        <img src={this.state.imgSrc} alt="" />
      </div>
    );
  }
  componentDidMount(){
    setInterval(()=>{
        this.setState({count : this.state.count +1})
    },1000)
  }
  componentWillUnmount(){
    console.log("component will unmount")
  }
}
export default Person