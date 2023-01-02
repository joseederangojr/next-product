import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createProduct as create, deleteProduct as remove, updateProduct as update } from '../product'

export const useProduct = () => {
    const products = useSelector(state => state.product.items)
    const dispatch = useDispatch()

    const createProduct = useCallback(({ name, description }) => {
        dispatch(create({ name, description }))
    }, [dispatch])

    const updateProduct = useCallback(({ id, name, description }) => {
        dispatch(update({ id, name, description }))
    }, [dispatch])

    const deleteProduct = useCallback(({ id }) => {
        dispatch(remove({ id }))
    }, [dispatch])

    return {
        products,
        createProduct,
        updateProduct,
        deleteProduct
    }
}