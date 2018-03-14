import React from 'react';

export class Next extends React.Component{


render() {

  return<div>
    <div className ="right" onClick = {this.props.getNextMonth}> ⟩ </div>
  </div>
}

}
