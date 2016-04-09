import uuid from 'node-uuid';
import React from 'react';

import connect from '../decorators/connect';

import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

@connect(NoteStore)
export default class App extends React.Component {
    //The annotation takes care of all of this now
    /*constructor(props) {
        super(props);

        this.storeChanged = this.storeChanged.bind(this);
        this.state = NoteStore.getState();

        this.addNote = this.addNote.bind(this);
        this.findNote = this.findNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    componentDidMount() {
        NoteStore.listen(this.storeChanged);
    }

    componentWillUnmount() {
        NoteStore.unlisten(this.storeChanged);
    }

    storeChanged(state) {
        this.setState(state);
    }*/

    render() {
        const notes = this.props.notes;

        return <div>
            <button className="add-note" onClick={this.addNote}> + </button>
            <Notes items={notes} onEdit={this.editNote} onDelete={this.deleteNote}/>
        </div>;
    }

    addNote() {
        NoteActions.create({task: 'New Task'});
    }

    editNote(id, task) {
        NoteActions.update({id, task});
    }

    deleteNote(id) {
        NoteActions.delete(id);
    }

    findNote(id) {
        const notes = this.state.notes;
        const noteIndex = notes.findIndex((note) => note.id === id);

        if (noteIndex < 0) {
            console.warn('Failed to find note', notes, id);
        }

        return noteIndex;
    }
}