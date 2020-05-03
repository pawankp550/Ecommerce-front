import React, {useState, useEffect} from 'react'
import Layout from '../core/Layout'
import { getProducts, deleteProduct } from './adminAPI'
import { checkSignIn } from '../../auth'
import Loader from '../styled/Loader'
import { NavLink } from 'react-router-dom'
 
import './css/manageProducts.scss'

const ManageProducts = () => {
    const {user} = checkSignIn()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const init = async () => {
        setLoading(true)
        const response = await getProducts()

        if(response.error) {
            setLoading(false)
            return setError(response.error)
        } 
        setProducts(response.data)
        setLoading(false)
    }

    useEffect(() => {
        init()
    }, [])

    const removeProduct = async (productId) => {
        setLoading(true)
        const response = await deleteProduct(user.token, productId)
        
        if(response.error) {
            setLoading(false)
            setError(response.error)
        }
        setLoading(false)
        init()
    }

    const renderProductDetails = (item, i) => {
        return (
            <div className="products-details" key={i}>
                <div>
                    <span>{item._id}</span>
                </div>
                <div>
                    <span>{item.name}</span>
                </div>
                <div>
                    <NavLink to={`/admin/product/update/${item._id}`} className="update">Update</NavLink>
                    <span className="delete" onClick={() => { removeProduct(item._id) }}>Delete</span>
                </div>
            </div>
        )
    }

    const renderList = () => {
        if(error) {
            return (
                <div>
                    <h1>{error}</h1>
                </div>
            )
        } else {
            return (
                <div className="products">
                    <div className="products-header">
                        <div>
                            <span>Product ID</span>
                        </div>
                        <div>
                            <span>Product Name</span>
                        </div>
                        <div>
                            <span>Actions</span>
                        </div>
                    </div>
                    <div className="products-data">
                       {
                           products.map((item, i) => {
                               return renderProductDetails(item, i)
                           })
                       }
                    </div>
                </div>
            )
        }
    }

    return (
        <Layout>
            {loading? <Loader/> : renderList()}
        </Layout>
    )
}

export default ManageProducts