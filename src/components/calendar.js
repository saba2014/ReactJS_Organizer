import React from 'react';

export class Calendar extends React.Component{

      render (){
        let d, lastDay, firstDay,allDays,weekDays,array,  size = 7, arr = [], subarray=[], month = this.props.month,
        years = this.props.years, currentYear, currentMonth, nd = new Date(), md = this.props.myDay ;

        //Get the current year
        for(let w = 0; w < years.length; w++){
            if(years[w] == this.props.curry){
                  currentYear = years[w];

          //Get the current month
          for(let f = 0; f < month.length; f++){
              if(month.indexOf(month[f]) == this.props.currm){
                    currentMonth = month[f];

             d = new Date(years[w],f);
             allDays =  new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
             firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
             lastDay = new Date(d.getFullYear(), d.getMonth()+1, 0).getDay();

          //Get the weekday names
           weekDays = this.props.days.map((item, index)=>{
            return <td key ={index}>
                   {item}
                   </td>
            })

          //Fill empty columns
          if(firstDay == 0) firstDay = 7;
          for(let i = 0; i < firstDay-1; i++){
                  arr.push('');
            }
          // Get all days  of the month
          for(let j = 1; j <= allDays; j++){
                  arr.push(j);
          }

          //Fill empty columns
          for(let z = 0; z < 7- lastDay; z++){
                 arr.push('');
          }

           for(let k = 0; k< Math.ceil(arr.length/size); k++){
                 subarray[k] = arr.slice(k*size, (k*size) + size);
               }

          array = subarray.map((item, index)=>{
          const cell =  item.map((elem, ind)=>{

          if(elem == nd.getDate() && currentMonth == this.props.month[nd.getMonth()] && currentYear == nd.getFullYear()){
            elem = <span style={{color:'#234efc', fontWeight:'900', fontSize:'16px', background:'#fff', padding:'8px'}}> {elem}</span>;
         }

          return <td key = {ind} onClick={this.props.toDaysBusiness.bind(this, elem, ind)} >
                   {elem}
                  </td>
          });

            return <tr key = {index}>
                   {cell}
                </tr>;
              })
           }
        }
      }
}


                 return (
                   <div className="container">
                   <div className="row">
                   <div className="col-lg-4 col-md-4 offset-8">
                   <div className="text-center ">{currentMonth} {currentYear}</div>
                    <table >
                    <thead>
                    <tr>
                    { weekDays }
                    </tr>
                    </thead>
                    <tbody>
                  {array}
                    </tbody>
                    </table>
                    <p className="myEvent">{ this.props.myEvent }</p>
                    <p>{this.props.selected}</p>
                    </div>
                    </div>
                     </div>
                     )
         }


          }
