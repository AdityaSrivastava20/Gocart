import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
    const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

    

    return product && (
  <div
    onClick={() => {
      navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
      scrollTo(0, 0);
    }}
    className="group border border-gray-200 rounded-2xl px-3 md:px-4 py-4 bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer min-w-56 max-w-56 w-full"
  >
    <div className="flex items-center justify-center mb-2">
      <img
        className="rounded-lg object-contain h-28 transition-transform duration-300 group-hover:scale-105"
        src={product.image[0]}
        alt={product.name}
      />
    </div>

    <div className="text-gray-500 text-sm space-y-1">
      <p className="text-xs uppercase tracking-wide text-gray-400">{product.category}</p>
      <p className="text-gray-800 font-semibold text-base truncate">{product.name}</p>

      <div className="flex items-center gap-0.5">
        {Array(5).fill('').map((_, i) => (
          <img
            key={i}
            className="md:w-4 w-3.5"
            src={i < 4 ? assets.star_icon : assets.star_dull_icon}
            alt=""
          />
        ))}
        <p className="text-xs text-gray-400 ml-1">(4)</p>
      </div>

      <div className="flex items-end justify-between mt-4">
        <p className="md:text-lg text-base font-medium text-primary">
          {currency}{product.offerPrice}{' '}
          <span className="text-gray-400 text-xs line-through">{currency}{product.price}</span>
        </p>

        <div onClick={(e) => e.stopPropagation()} className="text-primary">
          {!cartItems?.[product._id] ? (
            <button
              className="flex items-center gap-2 bg-primary/10 cursor-pointer border border-primary/40 hover:bg-primary/20 transition-colors md:w-[80px] w-[64px] h-[34px] rounded-lg text-sm font-medium"
              onClick={() => addToCart(product._id)}
            >
              <img src={assets.cart_icon} alt="cart_icon" className="w-4 ml-3 cursor-pointer" />
              Add
            </button>
          ) : (
            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/20 rounded-lg text-sm font-medium">
              <button
                onClick={() => removeFromCart(product._id)}
                className="px-2 h-full hover:text-red-500 transition-colors cursor-pointer"
              >
                –
              </button>
              <span className="w-5 text-center">{cartItems[product._id] || 0}</span>
              <button
                onClick={() => addToCart(product._id)}
                className="px-2 h-full hover:text-green-600 transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
};

export default ProductCard;