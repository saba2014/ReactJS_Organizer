import React from 'react';

export class AddBusiness extends React.Component{

    render(){
      let add;
           if(this.props.click){
      add = <div>
                <p><button onClick = {this.props.creatingBusiness} >Creating business</button></p>
                <input type = "text" value = {this.props.value} onChange={this.props.changeAddInput} />
            </div>;
           }
        return (
          <div>
          { add }
          </div>
        )
      }

    }
