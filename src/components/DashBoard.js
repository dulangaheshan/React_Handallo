import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://pixabay.com/api/key=9232338-5c1ff106b9384e4f9441311ef/nature"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  state = {};
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <GridList cols={3}>
            {items.map(item => (
              <li key={item.id}>
                {item.name} | {item.email}
                <img src={item.thumbnailUrl} />
              </li>
            ))}
          </GridList>
        </div>
      );
    }
  }
}

export default DashBoard;
