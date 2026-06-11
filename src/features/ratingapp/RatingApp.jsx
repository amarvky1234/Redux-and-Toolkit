import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { rateProduct, setFilterRating } from "./ratingSlice";

function RatingApp() {
    const dispatch = useDispatch();

    const {products, filterRating} = useSelector((state) => state.ratingR);

    const filteredProducts = products.filter((product) => {
        return product.rating >= filterRating
    });

    const averageRating = products.length > 0 ? (
        products.reduce((sum, p) => sum + p.rating, 0) / products.length
    ).toFixed(1) : 0;

    return(
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header">
                    <h2>Redux Rating App</h2>
                </div>

                <div className="card-body">
                    <h5>
                        Average Rating: {averageRating}
                    </h5>

                    <div className="mb-4">
                        <label className="me-2">Filter:</label>
                        <select className="form-select w-25"
                                value={filterRating} 
                                onChange={(e) => dispatch(setFilterRating(
                                    Number(e.target.value)
                                ))}
                        >
                            <option value={0}>All Rating</option>
                            <option value={1}>1 Star & Above</option>
                            <option value={2}>2 Stars & Above</option>
                            <option value={3}>3 Stars & Above</option>
                            <option value={4}>4 Stars & Above</option>
                            <option value={5}>5 Stars</option>
                        </select>
                    </div>

                    {filteredProducts.map((product) => (
                        <div key={product.id}>
                            <h5>{product.name}</h5>

                            <div>
                                {[1,2,3,4,5].map((star)=>(
                                    <button key={star}
                                        className={`btn me-1 ${
                                            star <= product.rating 
                                            ? "btn-warning" : "btn-outline-warning"
                                        }`}
                                        onClick={() => dispatch(rateProduct({
                                            id: product.id,
                                            rating: star,
                                        }))}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>

                            <p className="mt-2">
                                Rating: {product.rating}/5
                            </p>
                        </div>
                    ))}

                    {filteredProducts.length === 0 && (
                        <h5>No Products Found</h5>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RatingApp;