import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function IndividualListingPage({  }) {

    return (
        <div class="">
            <div class="card mb-3">
                <div class="row">
                    <div class="col-4">
                        <img class="card-img-top" src="https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/indianfarmer_1616522104637_original._CR3,3,1315,1315_._FMjpg_.jpeg" alt="Service required person"/>
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">Service Required</h5>
                            <p class="card-text">location : chaand</p>
                            <p class="card-text">Date: 12/12/12</p>
                            <p class="card-text">Dur/Ar: infinity</p>
                        </div>
                        <div class="card-body m-3" style={{border:"3px solid black"}}>
                            <form>
                                <h2 className="text-center">Service Provider form</h2>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Date</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your service preffered date service"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Proice/(area, duration)</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your price per duration or area"/>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualListingPage;