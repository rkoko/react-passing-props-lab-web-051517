import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({filters, currentFilter, handleFilterChange, fruit})=>{
  return(
     <div className="fruit-basket">
       <Filter handleChange={handleFilterChange} filters={filters} />
       <FilteredFruitList filter={currentFilter} fruit={fruit} />
     </div>
  )
}

// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }
//
//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

FruitBasket.defaultProps={
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: ()=>{}
}

export default FruitBasket;
