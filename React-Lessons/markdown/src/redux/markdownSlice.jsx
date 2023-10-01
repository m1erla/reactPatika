import { createSlice } from "@reduxjs/toolkit";

const helpText = `Heading
------
Sub-heading
------

# Important heading
Paragraphs are separated
by a blank line.



`


export const markdownSlice = createSlice({
    name: "markdown",
    initialState: {
        clickHelp: false,
        helpText: helpText,
        userText: "Here is a user input",
    },
    reducers: {
        clickHelpChangne: (state) => {
            state.clickHelp = !state.clickHelp;
        },
        userTextChange: (state, action) => {
            state.userText = action.payload;
        }
    }

})

export const { clickHelpChangne, userTextChange } = markdownSlice.actions;

export default markdownSlice.reducer;