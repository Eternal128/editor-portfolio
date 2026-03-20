const Alert = ({ type, text }) => {
  return (
    <div className="fixed bottom-6 right-6 flex justify-center items-center z-50">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 20px',
          background: 'var(--surface)',
          border: `1px solid ${type === 'danger' ? 'rgba(224,92,58,0.4)' : 'rgba(91,106,245,0.4)'}`,
          borderRadius: 10,
          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${type === 'danger' ? 'rgba(224,92,58,0.1)' : 'rgba(91,106,245,0.1)'}`,
          backdropFilter: 'blur(20px)',
          animation: 'section-reveal 0.4s var(--ease-out)',
        }}
        role="alert"
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px 10px',
            borderRadius: 4,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 700,
            background: type === 'danger' ? 'rgba(224,92,58,0.15)' : 'rgba(91,106,245,0.15)',
            color: type === 'danger' ? '#e05c3a' : '#5b6af5',
          }}
        >
          {type === 'danger' ? 'Error' : 'Success'}
        </span>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem',
            color: 'var(--paper)',
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Alert;