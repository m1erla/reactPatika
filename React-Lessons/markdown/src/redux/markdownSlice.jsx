import { createSlice } from "@reduxjs/toolkit";

const helpText = `Heading
=======
Sub-heading
-----------
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break
Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .
Shopping list:
  * apples
  * oranges
  * pears
Numbered list:
  1. apples
  2. oranges
  3. pears

  
The rain---not the reign---in
Spain.

*[Furkan Karakus](http://github.com/m1erla)*


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