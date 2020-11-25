import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    img: this.props.img,
  };
  handleIncrementClick = () => {
    let newImg;
    if (this.state.img === this.props.img) {
      newImg = this.props.imgClicked;
    } else {
      newImg = this.props.img;
    }
    this.setState({
      img: newImg,
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.img} onClick={this.handleIncrementClick} />
      </div>
    );
  }
}

export default ClickablePicture;
