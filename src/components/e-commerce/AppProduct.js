import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';

function AddProduct({ history }) {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    return (
        <div id="modal" className="popup">
            <div className="popup__content container">
                <a href="#home" className="popup__close">&times;</a>
                <form >
                    <div className="form-group my-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id="productName" 
                            aria-describedby="productName" 
                            placeholder="Enter Product Name..."
                            required
                            />
                    </div>
                     <div className="form-group my-3">
                        <input 
                            type="url" 
                            className="form-control" 
                            value={image}
                            onChange={e => setImage(e.target.value)}
                            id="imageUrl" 
                            aria-describedby="imageUrl" 
                            placeholder="Enter Image Url..."
                            required
                            />
                    </div>
                    <div className="form-group my-3">
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                            <div class="input-group-text">$</div>
                        </div>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="productPrice" 
                            placeholder="Enter Product price.."
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            min='1'
                            required
                        />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(AddProduct);