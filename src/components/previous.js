import React from 'react';

export class Previous extends React.Component{


render() {

  return<div>
    <div className ="left" onClick = {this.props.getPreviousMonth}> ⟨ </div>
  </div>
}

}
