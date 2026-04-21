import React, {useState, useEffect} from 'react';
import styles from './Root.module.css';

// ─────────────────────────────────────────
// 🔒 PIN GATE CONFIG — edit these two lines
const ENABLE_PIN = false;       // ← set to true to enable the PIN gate
const CORRECT_PIN = '1234';     // ← change to your PIN
// ─────────────────────────────────────────

const SESSION_KEY = 'pab_verified';

export default function Root({children}) {
  const [verified, setVerified] = useState(!ENABLE_PIN);
  const [pin, setPin]           = useState('');
  const [error, setError]       = useState(false);

  useEffect(() => {
    if (ENABLE_PIN && sessionStorage.getItem(SESSION_KEY) === 'true') {
      setVerified(true);
    }
  }, []);

  const submit = (value) => {
    if (value === CORRECT_PIN) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setVerified(true);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
        setPin('');
      }, 700);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setPin(value);
    if (value.length === 4) submit(value);
  };

  if (verified) return children;

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" width="48" height="48">
            <rect width="36" height="36" rx="7" fill="#03979d"/>
            <rect x="9" y="9" width="18" height="18" rx="3" fill="none" stroke="white" strokeWidth="1.5"/>
            <line x1="13" y1="9" x2="13" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="23" y1="9" x2="23" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="13" y1="27" x2="13" y2="31" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="23" y1="27" x2="23" y2="31" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="9" y1="13" x2="5" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="9" y1="23" x2="5" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="27" y1="13" x2="31" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="27" y1="23" x2="31" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="18" cy="18" r="3" fill="white"/>
          </svg>
        </div>
        <h1 className={styles.title}>Physical AI Bootcamp</h1>
        <p className={styles.subtitle}>Enter PIN to continue</p>
        <input
          className={`${styles.pinInput} ${error ? styles.shake : ''}`}
          type="password"
          inputMode="numeric"
          placeholder="••••"
          maxLength={4}
          value={pin}
          autoFocus
          onChange={handleChange}
        />
        {error && <p className={styles.errorMsg}>Incorrect PIN. Try again.</p>}
        <p className={styles.hint}>Enter the 4-digit PIN provided by your facilitator.</p>
      </div>
    </div>
  );
}
