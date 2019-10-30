import React from 'react';
import CityList from './CityList'
import {getWeather} from '../apis/fake-weather'

class MainView extends React.Component {
     onCityChanged = async (city)=>{
         try{
            const weather = await getWeather(city);
            alert(`Temperature in ${city} is ${weather.temperature}, status is ${weather.status}`)
         }catch(error){
             console.log(error);
             alert('Failed to fetch whether info');
         }        
      };

    render() {
      return <CityList cities={['London', 'NY', 'Tokyo']} onChange={this.onCityChanged}/>
    };
}

export default MainView;