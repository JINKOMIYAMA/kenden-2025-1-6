import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
  const { itemCount, items, incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsOpen(false);  // カートを閉じる
    navigate('/checkout');  // 支払いページへ移動
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-4 bg-gray-900/80 backdrop-blur-sm rounded-full border border-blue-400/20 hover:bg-gray-800/80 transition-colors"
      >
        <ShoppingCart className="w-7 h-7 text-blue-400" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-base w-6 h-6 rounded-full flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg border border-blue-400/20 p-4">
          <h3 className="text-white font-bold mb-3">カート</h3>
          {items.length === 0 ? (
            <p className="text-gray-400">カートは空です</p>
          ) : (
            <div className="space-y-3">
              {items.map(item => (
                <div key={item.id} className="flex items-center justify-between gap-2 text-sm text-gray-300 bg-gray-800/50 p-2 rounded">
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-400">¥{item.price.toLocaleString()}</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="p-1 hover:bg-gray-700 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <span className="w-8 text-center">{item.quantity}</span>
                    
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="p-1 hover:bg-gray-700 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 hover:bg-gray-700 rounded text-red-400"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="flex justify-between text-white font-bold mb-4">
                  <span>合計</span>
                  <span>
                    ¥{items.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString()}
                  </span>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full transition-colors"
                >
                  支払画面へ
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartIcon; 