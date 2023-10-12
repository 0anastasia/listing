import Offer from "./offer";
import React from "react";
import './listing.css';
import { ICards } from "./models";

interface IListingProps {
    items: ICards[]
}

function Listing(props: IListingProps) {
    const { items } = props;
    return (
        <div className="item-list">
            { items.map(el => <Offer offer={ el } key={el.listing_id}/>) }
        </div>
    )
}

export default Listing;