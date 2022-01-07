import React from 'react';
import { Link } from 'react-router-dom';

const SingleCountry = (props) => {
    // console.log(props.country);
    const {name, flag} = props.country;
    return (
        <div className="card m-3">
         <div className="row">
            <div className="col-md-3">
                <img src={flag} alt="" className="w-100" />
            </div>
            <div className="col md-8">
                    <div className="row">
                      <h2 className="">{name}</h2>
                      <div className="col-md-2">
                      <Link to={`/country/${name}`}><button className='btn btn-success'>Details</button></Link>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCountry;