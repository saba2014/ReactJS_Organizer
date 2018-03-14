import React from 'react';

export class Businesses extends React.Component{


render() {
   let input, business = this.props.business,bus;
   if(this.props.click){
    this.props.checked? business = <del>{business}</del>:{business};
    if(this.props.edit){
      input = <input type = "text" value = {this.props.input} onChange = {this.props.changeInput.bind(null, this.props.index)} autoFocus />
    }
    bus = <div>
    <input type="checkbox" checked = {this.props.checked} value={this.props.value} onChange={this.props.changeBox.bind(null, this.props.index)}/>
       {business} {input}
    <button onClick = { this.props.editBusiness.bind(null, this.props.index) }>Edit</button>
    <button onClick = { this.props.deleteBusiness.bind(null, this.props.index) }>Delete</button>
   </div>;

  }
  return (
    <div className="container">
    <div className="row">
    <div className ="col-lg-8 col-md-8 offset-4">
    <div className="business">
   {bus}
   </div>
   </div>
   </div>
  </div>
)
}
}
