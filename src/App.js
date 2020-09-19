import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    itemList: [
      {
        id: 1,
        name: "Test1",
        photo:
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
      },
      {
        id: 2,
        name: "Test2",
        photo:
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
      },
      {
        id: 3,
        name: "Test3",
        photo:
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
      },
      {
        id: 4,
        name: "Test4",
        photo:
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
      },
      {
        id: 5,
        name: "Test5",
        photo:
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
      },
    ],
    myList: [],
  };

  addItem = (item) => {
    let myList = [...this.state.myList];
    let found = myList.find(function (currentValue) {
      return currentValue === item;
    });

    if (!found) {
      myList.push(item);
      this.setState({ itemList: this.state.itemList, myList });
    }

    console.log("MyList: ", myList);
  };

  removeItem = (item) => {
    let myList = [...this.state.myList];
    myList = myList.filter(function (value, index, arr) {
      return value != item;
    });
    this.setState({ itemList: this.state.itemList, myList });

    console.log("MyList: ", myList);
  };

  render() {
    return (
      <div className="App">
        <h1>Lists App</h1>
        <br />

        <div className="rightSide">
          {this.state.itemList.map((item, index) => (
            <div className="items" key={item.id}>
              <div className="item">
                <div className="item-content">
                  <div className="item-text">{item.name}</div>
                  <div className="itemPhoto">
                    <img src={item.photo} height="50px" width="50px"></img>
                  </div>
                  <button onClick={() => this.addItem(item)}>
                    Add to MyList
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="leftSide">
          {this.state.myList.map((item, index) => (
            <div className="items" key={item.id}>
              <div className="item">
                <div className="item-content">
                  <div className="item-text">{item.name}</div>
                  <div className="itemPhoto">
                    <img src={item.photo} height="50px" width="50px"></img>
                  </div>
                  <button onClick={() => this.removeItem(item)}>
                    Remove from MyList
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
