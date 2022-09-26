function friend(friends) {
    let myFriends = [];
    friends.forEach((element) => {
      if (element.length === 4 && typeof element === "string") {
      myFriends.push(element)
      }
    });
    return myFriends
  }