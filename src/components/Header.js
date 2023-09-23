function Header({ title, subtitle }) {
  return (
    <section className="hero bg-purple-100 flex flex-col h-64 text-center place-content-center">
      <div className="hero-body">
        <p className="title text-6xl">{title}</p>
        <p className="subtitle text-xl ">{subtitle}</p>
      </div>
    </section>
  );
}

export default Header;
