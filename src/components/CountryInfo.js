import React from 'react';

const CountryInfo = props => {

    console.log(props)


    return(
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.name ?

                    <div className = "card card-body">
                        <p>
                            Location: {props.name}
                        </p>
                        <p>
                            Continent: {props.continent}
                        </p>
                        <p>
                            Capital: {props.capital}
                        </p>
                        <p>
                            language: {props.language}
                        </p>
                        <p>
                            Currency: {props.currency}
                        </p>
                            <img src= {props.flag} alt="flags" />
                    </div>
                :
                <div className = "card card-body">
                    <p>No Request Yet</p>
                </div>
            }
        </div>
    )
}

export default CountryInfo;