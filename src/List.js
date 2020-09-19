import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import "./App.css";

class App extends Component {
  state = {
    itemList: [
      {
        id: 1,
        name: "Money Belt",
        photo:
          "https://shop.irisarke.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdU1zIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--239c28f4d8b3129daaeaa2bb2231ff18e4c2e2d6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bdb380eb48615643b5971ada12dac9186273738f/bc945f15-1c12-48f8-8d57-9056c48a2dda_2E100A25-5F9B-418E-9921-DCA8F8BA092D.JPG",
      },
      {
        id: 2,
        name: "Dress",
        photo:
          "https://shop.irisarke.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBblVxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--af099ebbc13a28fffe2bf9350374abc873c54bfd/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bdb380eb48615643b5971ada12dac9186273738f/40203b29-a6a1-4738-ae5b-d52531a67e97_00000000_zi_4101b63a-f6b4-46df-b5b3-a5076fa5c097.jpg",
      },
      {
        id: 3,
        name: "Rings",
        photo:
          "https://shop.irisarke.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbmtaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--82994099fd7220016fbc051ccfa0d528ac7956eb/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bdb380eb48615643b5971ada12dac9186273738f/62cbca4b-a8f3-4f5a-8098-0fd0f7bb601f_product-11641_11641_2.jpg",
      },
      {
        id: 4,
        name: "Watch",
        photo:
          "https://shop.irisarke.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWtqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3cf70c6bc8b44ba8e78d6dc5e3b3e08bfaf63c00/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bdb380eb48615643b5971ada12dac9186273738f/af2b6943-39a1-4d96-9a39-49a50f102d82_Front_stone.jpg",
      },
      {
        id: 5,
        name: "Necklaces",
        photo:
          "https://shop.irisarke.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2daIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--59be90395e7c3abc7ed241982258a42d7a1e7dc5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bdb380eb48615643b5971ada12dac9186273738f/7e57018e-424d-42d2-89f3-a0e2486dd955_product-11646_11646_2.jpg",
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
        <h1>List Iris Arke</h1>
        <br />

        <div className="rightSide">
          {this.state.itemList.map((item, index) => (
            <div className="items" key={item.id}>
              <div className="item">
                <div className="item-content">
                  <div className="item-text">{item.name}</div>
                  <div>
                    <img className="itemPhoto" src={item.photo}></img>
                  </div>

                  <button
                    className="buttonclick"
                    onClick={() => this.addItem(item)}
                  >
                    Add to My List
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
                  <div>
                    <img className="itemPhoto" src={item.photo}></img>
                  </div>
                  <button
                    className="buttonclick"
                    onClick={() => this.removeItem(item)}
                  >
                    Remove from My List
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
