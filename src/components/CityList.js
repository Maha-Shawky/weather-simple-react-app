import React from 'react';

class CityList extends React.Component {
    onChange= (e)=>{
        const selectedCity = this.props.cities[e.target.selectedIndex];
        this.props.onChange(selectedCity)
    }
    render() {
      return <select onChange={this.onChange}>
          {
              this.props.cities.map((city,index) =>
               <option key= {index} value={city.toLowerCase()}>
                {city}
               </option>)
          }
          </select>
    }
}

export default CityList;
