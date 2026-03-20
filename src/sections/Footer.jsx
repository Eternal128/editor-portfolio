const Footer = () => {
  return (
    <footer
      className="c-space pt-8 pb-6 flex justify-between items-center flex-wrap gap-5"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.18em',
          color: 'var(--muted)',
          display: 'flex',
          gap: 20,
          alignItems: 'center',
        }}
      >
        <span>Terms &amp; Conditions</span>
        <span style={{ opacity: 0.3 }}>|</span>
        <span>Privacy Policy</span>
      </div>

      <div className="flex gap-3">
        {[
          { src: '/assets/github.svg', label: 'GitHub', href: '#' },
          { src: '/assets/twitter.svg', label: 'Twitter', href: '#' },
          { src: '/assets/instagram.svg', label: 'Instagram', href: '#' },
        ].map(({ src, label, href }) => (
          <a
            key={label}
            href={href}
            className="social-icon"
            aria-label={label}
            target="_blank"
            rel="noreferrer"
          >
            <img src={src} alt={label} className="w-1/2 h-1/2" />
          </a>
        ))}
      </div>

      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.58rem',
          letterSpacing: '0.15em',
          color: 'var(--muted)',
          opacity: 0.7,
        }}
      >
        © 2026 James Hanzell. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;