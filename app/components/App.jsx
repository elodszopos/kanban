import React, { PropTypes } from 'react';

import AltContainer from 'alt-container';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <button className="add-lane" onClick={this.addItem}> + </button>
                <AltContainer stores={[LaneStore]}
                              inject={ {items: () => LaneStore.getState().lanes }}>
                    <Lanes />
                </AltContainer>
            </div>
        );
    }

    addItem() {
        LaneActions.create({name: 'New lane'});
    }
}

export default DragDropContext(HTML5Backend)(App);