const Footer = () => {
  return (
    <div className="p-10 bg-base-200 text-base-content">
      <footer className="footer max-w-6xl mx-auto">
        <aside>
          <h1 className="text-3xl font-extrabold">CareerHub</h1>
          <p className="text-md font-normal">
          There are many variations of passages <br/>
          of Lorem Ipsum , but the majority have <br/>
          suffered alteration in some form.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
