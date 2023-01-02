import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

// Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    createProduct: (state, { payload: { name, description }}) => {
        return {
            items: [{ id: Date.now(), name, description }, ...state.items]
        }
    },
    updateProduct: (state, { payload: { id, name, description } }) => {
        return {
            items: state.items.map((product) => {
                if(product.id !== id)  return product
                return {
                    id,
                    name,
                    description
                }
            })
        }
    },
    deleteProduct: (state, { payload: { id }}) => {
        return {
            items: state.items.filter((product) => {
                return product.id !== id
            })
        }
    }
  },
})

export const { createProduct, deleteProduct, updateProduct } = productSlice.actions

export default productSlice.reducer