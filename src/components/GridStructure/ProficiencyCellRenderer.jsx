import React from 'react';
import Charts from '../Charts'

// cell renderer for the proficiency column. this is a very basic cell renderer,
// it is arguable that we should not of used React and just returned a string of
// html as a normal ag-Grid cellRenderer.
export default class ProficiencyCellRenderer extends React.Component {

    render() {
        return (
            <div >
                <Charts />
            </div>
        );
    }
}
