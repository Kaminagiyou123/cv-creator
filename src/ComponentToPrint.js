import React, { Component } from "react";
import CvForm from "./CvForm";

class ComponentToPrint extends Component {
  render() {
    return <CvForm ref={(el) => (this.componentRef = el)} />;
  }
}
export default ComponentToPrint;
