import React from 'react';
import axios from "axios";


export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countriesList: [],
            citiesList:[]
        };
    }

    async componentDidMount() {
        try {
            const req = await axios.get('http://localhost:5001/getCountries')
            const data = await req.data
            this.setState({countriesList:data})
        }catch (e){
            console.log(e)
        }
    }
    handleSelect=async (event)=>{
        try {
            const req = await axios.get(`http://localhost:5001/getCities/${event.target.value}`)
            const data = await req.data
            this.setState({citiesList:data})
        }catch (e){
            console.log(e)
        }
    }

    renderDrodown =(arr,selectname)=>{
        if (arr.length === 0){
            return null;
        }else {
            return (
                <select  onChange={this.handleSelect} name={selectname}>
                    <option value="">Please Select</option>
                    {
                        arr.map((item,i)=>{
                            return <option   key={i} value={item.country_id||item.city_id}>{item.country||item.city}</option>
                        })
                    }
                </select>
            )
        }
    }
    render() {
        const {countriesList,citiesList} = this.state;

        return (
            <>
                {
                    this.renderDrodown(countriesList,'countries')
                }
                {
                    this.renderDrodown(citiesList,'cities')
                }

            </>
        );
    }
}

