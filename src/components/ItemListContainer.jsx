import React from "react";

const ItemListContainer = ({ greeting }) => {

    return (
        <>
            <div>
                <p>{greeting}</p>
            </div>
            <div>
                <ul>
                    <li><a href="#">Tazas</a></li>
                    <li><a href="#">Platos</a></li>
                    <li><a href="#">Bowls</a></li>
                </ul>
            </div>
        </>
    )
}

export default ItemListContainer;