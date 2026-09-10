const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Akeleojo Achor</p>
      <nav aria-label="Footer navigation"><a href="#contact">Contact</a><a href="https://github.com/AkeleA" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/akeleojo-achor-1a8557172/" target="_blank" rel="noreferrer">LinkedIn</a></nav>
    </footer>
  );
};

export default Footer;
