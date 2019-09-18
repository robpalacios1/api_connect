import React from 'react';

const CountryForm = props => (
    <div className = "card card-body">
        <form onSubmit={props.getCountry}>
            <div className="form-group">
                <input type="text" name="country" placeholder="Your Country Name" className="form-control" autoFocus />
            </div>
            <button className="btn btn-success btn-block">
                Get Country
            </button>
        </form>
    </div>
);

export default CountryForm;