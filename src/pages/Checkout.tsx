import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePayment = () => {
    // ここに支払い処理のロジックを追加
    alert('支払い処理が完了しました！');
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-dark p-6">
        <div className="max-w-4xl mx-auto bg-gray-900/80 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">カートが空です</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-400 hover:text-blue-300"
          >
            商品一覧に戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark p-6">
      <div className="max-w-4xl mx-auto bg-gray-900/80 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">お支払い</h2>
        
        <div className="space-y-4 mb-8">
          <h3 className="text-xl text-white mb-4">注文内容</h3>
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-gray-800/50 p-4 rounded">
              <div>
                <div className="text-white font-medium">{item.name}</div>
                <div className="text-gray-400">数量: {item.quantity}</div>
              </div>
              <div className="text-white">¥{(item.price * item.quantity).toLocaleString()}</div>
            </div>
          ))}
          
          <div className="border-t border-gray-700 pt-4 mt-4">
            <div className="flex justify-between text-xl font-bold text-white">
              <span>合計</span>
              <span>¥{total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="text-blue-400 hover:text-blue-300"
          >
            ← 商品一覧に戻る
          </button>

          <button
            onClick={handlePayment}
            className="bg-yellow-400 hover:bg-blue-400 text-black font-bold py-3 px-8 rounded-full transition-colors"
          >
            支払い
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 