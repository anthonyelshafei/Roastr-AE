import React, { Fragment } from 'react';

class EditRoast extends React.Component {
    render() {
        return ( 
            <Fragment>
                <div>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/> 
                    <input type="text"/>
                    <input type="text"/>
                    <button>Delete Roast</button>
                </div>
            </Fragment>
        )
    }
}

export default EditRoast;