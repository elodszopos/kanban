/**
 * Created by elod on 4/9/16.
 */

import React from 'react';
import ItemTypes from '../constants/itemTypes';

import { DragSource, DropTarget } from 'react-dnd';

const noteSource = {
    beginDrag(props) {
        return {
            id: props.id
        };
    },
    isDragging(props, monitor) {
        return props.id === monitor.getItem().id;
    }
};

const noteTarget = {
    hover(targetProps, monitor) {
        const targetId = targetProps.id;
        const sourceProps = monitor.getItem();
        const sourceId = sourceProps.id;

        if (sourceId !== targetId) {
            targetProps.onMove({sourceId, targetId});
        }
    }
};

class Note extends React.Component {
    render() {
        const {connectDragSource, connectDropTarget, isDragging, onMove, id, ...props} = this.props;

        return connectDragSource(connectDropTarget(
            <li style={{opacity: isDragging ? 0 : 1 }} {...props}>{props.children}</li>
        ));
    }
}

Note.propTypes = {
    id: React.PropTypes.string.isRequired,
    connectDragSource: React.PropTypes.func,
    connectDropSource: React.PropTypes.func,
    onMove: React.PropTypes.func
};

Note.defaultProps = {
    onMove: () => {
    }
};

export default DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
}))(Note));