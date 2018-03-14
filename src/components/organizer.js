import React from 'react';
import { Calendar } from './calendar';
import { Previous } from './previous';
import { Next } from './next';
import { Businesses} from './businesses';
import { AddBusiness} from './addBusiness'


export class Organizer extends React.Component{
constructor(){
  super();
  this.state = {
            daysOfWeekShort :["Mon.","Tue.","Wed.","Thu.","Fri.","Sat.", "Sun."],
            weekdays:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            monthNames : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            years: [2014,2015,2016, 2017, 2018, 2019, 2020,2021,2022],
            curry: new Date().getFullYear(),
            currm: new Date().getMonth(),
            previous:false,
            next:false,
            selected:'',
            click: false,
            businesses: [
            {business:'Creating a layout.', edit:false, checked:false, input:''},
            {business:'Make up a layout.', edit:false, checked:false, input:'' },
          ],
          add :false,
          value:'',
          myDay:[20,'March', 2018],
          myEvent:'We have an event on March 20!',
          };
    }

    changeAddInput(event){
      this.setState({value: event.target.value})
    }

    creatingBusiness(){
      if(this.state.value && this.state.value.length > 0)  {
          this.state.businesses.push({business: this.state.value, edit:false, checked:false});
          this.setState({businesses: this.state.businesses});
       }
          this.state.value = '';
          this.setState({value: this.state.value})
    }

    deleteBusiness(index){
          this.state.businesses.splice(index, 1);
          this.setState({businesses: this.state.businesses})
         }

         changeInput(index, event){
          this.state.businesses[index].input = event.target.value;
          this.setState({input :this.state.businesses})

             }

   changeBox(index, event){
         this.state.businesses[index].checked = !this.state.businesses[index].checked  ;
         this.setState({businesses: this.state.businesses})
             }


    editBusiness(index, event){
      let businesses = this.state.businesses[index];
        businesses.edit = !businesses.edit;
      if(businesses.edit){
        businesses.input = businesses.business;
        businesses.business  = '';
      }else{
        businesses.business = businesses.input;
      }

        this.setState({businesses: this.state.businesses})
    }

    toDaysBusiness(elem,ind, event){
      if(elem ==  '[object Object]') elem = new Date().getDate();
      if(elem != '') this.state.selected = this.state.weekdays[ind] +': '+elem;
        this.setState({selected: this.state.selected})
      if(elem ==  this.state.myDay[0]){
        this.state.click = !this.state.click;
        this.setState({click: this.state.click})
      }else{
          this.state.click = false;
          this.setState({click: this.state.click})
      }
      }

     getPreviousMonth(){
        this.state.currm -=1;
       if(this.state.currm == -1){
        this.state.currm = 11;
        this.state.curry -=1;
          if(this.state.curry < 2014) this.state.curry = 2014 ;
        this.setState({currm: this.state.currm})
       }
        this.state.selected = '';
        this.setState({curry: this.state.curry})
        this.setState({selected: this.state.selected})

     }

   getNextMonth(){
        this.state.currm +=1;
     if(this.state.currm ==  12){
        this.state.currm = 0;
        this.state.curry +=1;
     if(this.state.curry > 2022) this.state.curry = 2022;
        this.setState({currm: this.state.currm})
       this.setState({curry: this.state.curry})

       }
       this.state.selected = '';
       this.setState({selected: this.state.selected})
       this.setState({currm: this.state.currm})
     }




      render (){
        const businesses = this.state.businesses.map((item, index)=>{
          return <Businesses
                index = {index}
                key = {index}
                business   = {item.business}
                edit = {item.edit}
                checked = {item.checked}
                input = {item.input}
                value = {this.state.value}
                click = {this.state.click}
                changeInput = {this.changeInput.bind(this)}
                changeBox = {this.changeBox.bind(this)}
                editBusiness = {this.editBusiness.bind(this)}
                deleteBusiness = {this.deleteBusiness.bind(this)}
                />
         });

              return (
                   <div >
                  <Calendar
                   days = { this.state.daysOfWeekShort }
                   month = { this.state.monthNames }
                   years = { this.state.years }
                   curry = { this.state.curry }
                   currm = { this.state.currm }
                   selected = {this.state.selected}
                   myDay = {this.state.myDay}
                   myEvent = {this.state.myEvent}
                   toDaysBusiness = {this.toDaysBusiness.bind(this)}
                     />
                     <Previous
                      getPreviousMonth = {this.getPreviousMonth.bind(this)}
                     />
                     <Next
                      getNextMonth = {this.getNextMonth.bind(this)}
                     />
                     <AddBusiness
                     click = {this.state.click}
                     value = {this.state.value}
                     creatingBusiness = { this.creatingBusiness.bind(this)}
                     changeAddInput = { this.changeAddInput.bind(this)}
                     />
                     <p></p>
                    {businesses}

                    </div>

                     )
         }


          }
