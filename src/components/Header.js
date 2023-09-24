function Header({ title, subtitle }) {
  return (
    <section className="hero bg-gradient-to-r from-cyan-300 to-purple-200 h-64">
      <div className="hero-body my-10 flex flex-col text-center">
        <p className="title text-6xl">{title}</p>
        <p className="subtitle text-xl">{subtitle}</p>
      </div>
    </section>
  );
}

export default Header;
