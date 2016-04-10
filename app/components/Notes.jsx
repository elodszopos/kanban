import React from 'react';
import Note from './Note.jsx';
import Editable from './Editable.jsx';
import LaneActions from '../actions/LaneActions';

class Notes extends React.Component {
    constructor(props) {
        super(props);

        this.renderNote = this.renderNote.bind(this);
    }

    renderNote(note) {
        return (
            <Note className="note" onMove={LaneActions.move}
                  id={note.id} key={`note${note.id}`}>
                <Editable
                    value={note.task}
                    onEdit={this.props.onEdit.bind(null, note.id)}
                    onDelete={this.props.onDelete.bind(null, note.id)}/>
            </Note> );
    }

    render() {
        const notes = this.props.items;

        return <ul className="notes">{notes.map(this.renderNote)}</ul>;
    }
}

Notes.propTypes = {
    items: React.PropTypes.array,
    onEdit: React.PropTypes.func,
    onDelete: React.PropTypes.func
};

Notes.defaultProps = {
    items: [],
    onEdit: () => {
    },
    onDelete: () => {
    }
};

export default Notes;