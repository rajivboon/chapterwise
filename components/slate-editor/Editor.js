import React from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        text: 'A line of text in a paragraph.',
                    },
                ],
            },
        ],
    },
})

// Define our app...
export default class SlateEditor extends React.Component {
    // Set the initial value when the app is first constructed.
    state = {
        value: initialValue,
        isLoaded: false
    }

    componentDidMount() {
        this.setState({ isLoaded: true });
    }

    // On change, update the app's React state with the new editor value.
    onChange = ({ value }) => {
        this.setState({ value })
    }

    // Define a new handler which prints the key that was pressed.
    onKeyDown = (event, editor, next) => {
        // Return with no changes if the keypress is not '&'
        if (event.key !== '&') return next()

        // Prevent the ampersand character from being inserted.
        event.preventDefault()

        // Change the value by inserting 'and' at the cursor's position.
        editor.insertText('and')
    } 
    // Render the editor.
    render() {
        return <Editor value={this.state.value}
        onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            />
        }
    }
                                // onKeyDown = (event, editor, next) => {
                                //     console.log(event.key)
                                //     // debugger;
                                //     return next()
                                // }