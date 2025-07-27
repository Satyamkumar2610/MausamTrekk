"use client";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../lib/firebaseConfig"; 
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); 
    } catch (err) {
      alert("Login failed. Please check your credentials. Error: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      alert("Google Sign-in failed. Please try again. Error: " + err.message);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.loginBox}>
        <h1 style={styles.title}>MausamTrek 🌦️</h1>
        <h2 style={styles.subtitle}>Welcome Back, Adventurer!</h2>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email Address"
            style={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" style={styles.submitButton}>
            Log In
          </button>
        </form>
        
        <div style={styles.dividerContainer}>
          <div style={styles.dividerLine}></div>
          <span style={styles.dividerText}>or</span>
          <div style={styles.dividerLine}></div>
        </div>
        
        <button onClick={handleGoogleLogin} style={styles.googleButton}>
          <GoogleIcon />
          Sign in with Google
        </button>

        <p style={styles.promptText}>
          Don't have an account?{" "}
          <Link href="/signup" style={styles.promptLink}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

// --- Helper Components & Styles ---

const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 8.841C34.553 4.806 29.602 2.5 24 2.5C11.936 2.5 2.5 11.936 2.5 24s9.436 21.5 21.5 21.5c11.499 0 20.724-8.995 20.724-20.923c0-1.343-.138-2.65-.389-3.917z"></path>
      <path fill="#FF3D00" d="M6.306 14.691c-2.213 4.013-3.446 8.641-3.446 13.639c0 2.922.536 5.719 1.486 8.273l6.602-5.127C10.311 30.113 10 28.563 10 27s.311-3.113.856-4.544l-6.602-5.127z" transform="translate(0 -3)"></path>
      <path fill="#4CAF50" d="M24 48c5.602 0 10.553-2.306 14.802-6.198l-6.6-5.127c-2.031 1.367-4.648 2.171-7.502 2.171c-4.796 0-8.94-2.734-10.68-6.581l-6.602 5.127C10.218 42.623 16.599 48 24 48z"></path>
      <path fill="#1976D2" d="M43.611 20.083H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.6 5.127C39.978 36.61 44 31.125 44 24c0-3.261-.686-6.392-1.889-9.157l-6.413 4.965C35.841 18.846 36 19.917 36 21s-.159 2.154-.488 3.229l-6.413-4.965C31.158 11.154 27.941 10 24 10c-4.796 0-8.94 2.734-10.68 6.581l-6.602-5.127C10.218 5.377 16.599 0 24 0c5.602 0 10.553 2.306 14.802 6.198L32.039 13.04C30.158 11.154 27.341 10 24 10c-3.059 0-5.842 1.154-7.961 3.039L38.802 8.841C34.553 4.806 29.602 2.5 24 2.5C11.936 2.5 2.5 11.936 2.5 24s9.436 21.5 21.5 21.5c11.499 0 20.724-8.995 20.724-20.923c0-1.343-.138-2.65-.389-3.917z" transform="translate(0 3)"></path>
    </svg>
);

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '1rem',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2670&auto=format&fit=crop')"
  },
  loginBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    backdropFilter: 'blur(12px)',
    padding: '2.5rem',
    borderRadius: '1rem',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    width: '100%',
    maxWidth: '420px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: '1.1rem',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#34495e',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  inputField: {
    width: '100%',
    padding: '0.9rem 1rem',
    backgroundColor: '#fff',
    border: '1px solid #bdc3c7',
    borderRadius: '0.5rem',
    fontSize: '1rem',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#2980b9', // A nice, friendly blue
    color: 'white',
    padding: '0.9rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '0.5rem',
  },
  dividerContainer: {
    margin: '1.5rem 0',
    display: 'flex',
    alignItems: 'center',
  },
  dividerLine: {
    flexGrow: 1,
    borderTop: '1px solid #bdc3c7',
  },
  dividerText: {
    margin: '0 1rem',
    color: '#34495e',
    fontSize: '0.8rem',
    fontWeight: '500',
  },
  googleButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    backgroundColor: '#fff',
    color: '#34495e',
    padding: '0.8rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    border: '1px solid #bdc3c7',
    cursor: 'pointer',
  },
  promptText: {
    fontSize: '0.9rem',
    textAlign: 'center',
    marginTop: '1.5rem',
    color: '#34495e',
  },
  promptLink: {
    color: '#2980b9',
    fontWeight: '600',
    textDecoration: 'none',
  }
};
