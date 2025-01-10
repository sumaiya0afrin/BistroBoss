const UserHomeCart = ({ Icon, gradient, count, item }) => {
  return (
    <div className="card rounded-md" style={gradient}>
      <div className="flex items-center gap-6 justify-center py-7 text-white">
        <Icon className="text-4xl" />
        <div>
          <h4 className="text-3xl font-extrabold">{count}</h4>
          <p className="text-2xl capitalize">{item}</p>
        </div>
      </div>
    </div>
  );
};

export default UserHomeCart;
