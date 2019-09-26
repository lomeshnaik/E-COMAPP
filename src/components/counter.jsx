import React, { Component } from "react";

class Counter extends Component {
  //state = {
  //value: this.props.counter.value
  // imageUrl: "https://picsum.photos/700", <img src={this.state.imageUrl} alt=""></img>
  //tags: ["tag1", "tag2", "tag3"]
  //};

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  //constructor() {
  // super();
  //this.handleIncrement = this.handleIncrement.bind(this);
  //}

  //handleIncrement = product => {
  //console.log(product);
  //this.setState({ value: this.state.value + 1 });
  //};

  //renderTags() {
  //if (this.state.tags.length === 0) return <p>There are no tag</p>;
  //return (
  //  <ul>
  //  {this.state.tags.map(tag => (
  //    <li key={tag}>{tag}</li>
  //   ))}
  // </ul>
  //);
  //}{this.state.tags.length === 0 && "Please Creat New Tags!"}
  //{this.renderTags()}
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className=" btn btn-success btn-lg"
        >
          Increment
        </button>

        <button
          onClick={() => {
            return this.props.onDelete(this.props.counter.id);
          }}
          className=" btn btn-danger btn-lg m-4"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
}
export default Counter;
