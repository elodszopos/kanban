/**
 * Created by elod on 4/10/16.
 */

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import assert from 'assert';
import Note from 'app/components/Note.jsx';

const {renderIntoDocument} = ReactTestUtils;

describe('Note', () => {
    it('renders children', () => {
        const test = 'test';
        const NoteContent = wrapInTestContext(Note);
        const component = renderIntoDocument(
            <NoteContent id="test">{test}</NoteContent>
        );
        assert.equal(component.props.children, test);
    });
});

// https://gaearon.github.io/react-dnd/docs-testing.html
function wrapInTestContext(DecoratedComponent) {
    class TestContextContainer extends React.Component {
        render() {
            return <DecoratedComponent {...this.props} />;
        }
    }

    return DragDropContext(TestBackend)(TestContextContainer);
}