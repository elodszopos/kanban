import React from 'react';
import Note from './Note.jsx';

export default class App extends React.Component {
    render() {
        return <div>
            <Note />
            <Note />
        </div>;
    }
}