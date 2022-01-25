import React from 'react';
import './App.css';
import axios from 'axios';
import Pictures from "./components/Pictures"
import Popup from "./components/Popup"

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        pictures: [], 
        bigPicture: '',
      };
  }

  componentDidMount() {
      this.querytodo();
  }

  querytodo = async () => {
      try {
          const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=50`);
          this.setState({ pictures: data });
      } catch (error) {
          return false;
      }
  };

  paintBigImage = (urlBigImg) => {
      this.setState({ bigPicture: urlBigImg });
  }

  closeBigImage = () => {
    this.setState({ bigPicture: '' });
  }


  render() {
    console.log(this.state.bigPicture);
      return (
          <div className="wrapper">
            <h1>HOLLA!!!</h1>
            <Pictures pictures={this.state.pictures} paintBigImage={this.paintBigImage}/>
            {this.state.bigPicture && <Popup urlBigPicture={this.state.bigPicture} closeBigImage={this.closeBigImage} /> }
            <Pagination pictures={this.state.pictures}/>
          </div>
      );
  }
}

export default App;