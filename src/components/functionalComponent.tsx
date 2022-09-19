/**
 * There are two types of functional components.
 * 1. function keyword
 * 2. arrow functions
 */

import React, { Fragment } from "react";

//Arrow functions
function ArrowFunction() {
    return <div>Arrow Function Component</div>
}

//Function keyword functional component.
function FunctionalComponent() {
    return (
        <Fragment>
            <ArrowFunction/>
            <div>Functional Component</div>
        </Fragment>
    )
}

export default FunctionalComponent;
