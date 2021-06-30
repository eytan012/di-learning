import React from "react";


class SelectComp extends React.Component {

    render(props) {
        const countries = this.props.countries;
        let renderedOptions = countries.map((country) => {
            return (
                <option value={country.country} key={country.country_id}>{country.country}</option>
            )
        });
        return (

            <div>

                <label>List of countries: </label>
                <select>
                    {renderedOptions}
                </select>
            </div>
        )
    }
}

export default SelectComp