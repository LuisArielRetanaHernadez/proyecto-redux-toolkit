import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit'
import { sub } from "date-fns";

const initialState = [
    { 
        id: '1', 
        title: 'First Post!', 
        content: 'Hello!',
        date: sub(new Date(), {minutes: 10}).toISOString(), 
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0
        },
        user: '2'
    },
    { 
        id: '2', 
        title: 'Second Post', 
        content: 'More text', 
        date: sub(new Date(), {minutes: 8}).toISOString(),
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
        },
        user: '1'
    }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // postAdded(state, action) {
        //     console.log(action.payload)
        //     state.push(action.payload)
        // },
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare({userId, ...value}) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        ...value,
                        reactions: {
                            thumbsUp: 0,
                            hooray: 0,
                            heart: 0,
                            rocket: 0,
                            eyes: 0,
                        },
                        user: userId,
                    }
                }
            }
        },

        postUpdated(state, action) {
            const {id, title, content} = action.payload
            const postExisting = state.find(state => state.id === id)
            if (postExisting) {
                postExisting.title = title
                postExisting.content = content
            }
        },

        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const postExisting = state.find(post => post.id === postId)

            if (postExisting) {
                postExisting.reactions[reaction]++
            }
        }
    },
})

export const { postAdded, postUpdated, reactionAdded } = postSlice.actions

export default postSlice.reducer;
