import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ProductList = () => {

    const { products, currency, axios, fetchProducts } = useAppContext();
    const [loading, setLoading] = useState(true);

    const toggleStock = async (id, inStock) => {
        try {
            const { data } = await axios.post('/api/product/stock', { id, inStock });
            if (data.success) {
                fetchProducts();
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            await fetchProducts();
            setLoading(false);
        };
        loadProducts();
    }, []);

    return (
        <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-2xl font-medium">
                    All <span className='text-primary'>Products</span>
                </h2>

                {loading ? (
                    <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20 animate-pulse">
                        <div className="w-full px-4 py-3">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="flex items-center space-x-4 py-3 border-b border-gray-200 w-full">
                                    <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                                    </div>
                                    <div className="h-4 bg-gray-300 rounded w-20 hidden md:block"></div>
                                    <div className="h-6 w-12 bg-gray-300 rounded-full"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                        <table className="md:table-auto table-fixed w-full overflow-hidden">
                            <thead className="text-gray-900 text-sm text-left">
                                <tr>
                                    <th className="px-4 py-3 font-semibold truncate">Product</th>
                                    <th className="px-4 py-3 font-semibold truncate">Category</th>
                                    <th className="px-4 py-3 font-semibold truncate hidden md:block">Selling Price</th>
                                    <th className="px-4 py-3 font-semibold truncate">In Stock</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-500">
                                {products.map((product) => (
                                    <tr key={product._id} className="border-t border-gray-500/20">
                                        <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                            <div className="border border-gray-300 rounded p-2">
                                                <img src={product.image[0]} alt="Product" className="w-16" />
                                            </div>
                                            <span className="truncate max-sm:hidden w-full">{product.name}</span>
                                        </td>
                                        <td className="px-4 py-3">{product.category}</td>
                                        <td className="px-4 py-3 max-sm:hidden">{currency}{product.offerPrice}</td>
                                        <td className="px-4 py-3">
                                            <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                                <input
                                                    onClick={() => toggleStock(product._id, !product.inStock)}
                                                    checked={product.inStock}
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                />
                                                <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                                                <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                            </label>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductList;
