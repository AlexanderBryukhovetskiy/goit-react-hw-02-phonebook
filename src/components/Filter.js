import React from "react";
import css from "./Filter.module.css";

export const Filter =({inputValue, InputOnChange}) => {
  return (
    <div className={css.searchInput}>
      <label>Find contact by name
        <input
        type="text"
        value={inputValue}
        onChange={InputOnChange}
        />
      </label>
    </div>
  )
}





// export class Filter extends Component {
//   state = {
//     filter: ''
//   }

//   handleInput = event => {
//     console.log(event.currentTarget.value);
//     const value =  event.currentTarget.value;
//     this.setState({filter: value});
    
//     this.props.onChange({...this.state, filter: value}); 
//   }

//   render() {
//     return (
//       <div className={css.searchInput}>
//         <label>Find contact by name
//           <input
//           type="text"
//           // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           // required
//           value={this.state.filter}
//           onChange={this.handleInput}
//           />
//         </label>
//       </div>)
//   }
// }
