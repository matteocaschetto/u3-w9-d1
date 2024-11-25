import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        style={{
          width: "100%",
          height: "auto"
        }}
      />
    );
  }
}

export default ImageComponent;
