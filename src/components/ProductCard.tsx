interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  titleColor?: string;
}

const ProductCard = ({ title, description, image, titleColor = "text-green-600" }: ProductCardProps) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden">
      <div className="relative aspect-[16/9] w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover bg-white"
        />
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${titleColor}`}>{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-300 text-lg">{description}</p>
          <button className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-full text-base font-bold hover:bg-yellow-400 transition-colors ml-4 whitespace-nowrap">
            購入
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;