import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends, 
    count: 0,
    clickedCards: []
    //to shove into the array-->.concat()  to check if inside slicked cards--->.indexof() shove into array in the state and check if that one is in the array by the value={friend.id} in the rendering below props
  };
  handleIncrement = () => {
//     let clickedFriendsArray= [];
//     // We always use the setState method to update a component's state
//     const clickedFriend =document.getElementsByClassName("remove");
//  console.log(clickedFriend)
 const clickedFriend2 =document.getElementById("me")
 //.concat(clickedCards)
  console.log(clickedFriend2)
  const clickedFriendValue= clickedFriend2.value;
  console.log(typeof((clickedFriendValue)))
//  pushInto = (pushedId)=>{
//    const pushedId= clickedFriend2.push(clickedFriendsArray)
//    console.log(pushedId)
//  }
//  console.log(clickedFriendsArray)
    this.setState({ count: this.state.count + 1, friends:friends.sort().reverse() });
  };

  
  
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title><p className="card-text">Click Count: {this.state.count}</p></Title>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            handleIncrement={this.handleIncrement}
            value= {friend.id}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
