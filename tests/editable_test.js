/**
 * Created by elod on 4/10/16.
 */

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import assert from 'assert';
import Editable from 'app/components/Editable.jsx';

const {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    findRenderedDOMComponentWithTag,
    Simulate
    } = ReactTestUtils;

describe('Editable', () => {
    it('renders value', () => {
        const value = 'value';

        const component = renderIntoDocument(
            <Editable value={value}/>
        );

        const valueComponent = findRenderedDOMComponentWithClass(component, 'value');

        console.log(valueComponent);
        assert.equal(valueComponent.textContent, value);
    });

    it('enters edit mode', () => {
        const value = 'value';
        const component = renderIntoDocument(
            <Editable value={value}/>
        );

        const valueComponent = findRenderedDOMComponentWithClass(component, 'value');

        Simulate.click(valueComponent);

        const input = findRenderedDOMComponentWithTag(component, 'input');

        assert.equal(input.value, value);
    });

    it('triggers onEdit', () => {
        let triggered = false;
        const newValue = 'value';
        const onEdit = (val) => {
            triggered = true;
            assert.equal(val, newValue);
        };

        const component = renderIntoDocument(
            <Editable value={'value'} onEdit={onEdit}/>
        );

        let valueComponent = findRenderedDOMComponentWithClass(component, 'value');

        Simulate.click(valueComponent);

        const input = findRenderedDOMComponentWithTag(component, 'input');

        input.value = newValue;

        Simulate.blur(input);

        assert.equal(triggered, true);
    });

    it('allows deletion', () => {
        let deleted = false;

        const onDelete = () => {
            deleted = true;
        };

        const component = renderIntoDocument(
            <Editable value={'value'} onDelete={onDelete}/>
        );

        let deleteComponent = findRenderedDOMComponentWithClass(component, 'delete');

        Simulate.click(deleteComponent);

        assert.equal(deleted, true);
    });
});
