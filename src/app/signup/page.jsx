"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebaseConfig"; 
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login"); 
    } catch (err) {
      alert("Signup failed. Please try again. Error: " + err.message);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.signupBox}>
        <h1 style={styles.title}>MausamTrek 🌦️</h1>
        <h2 style={styles.subtitle}>Join and Plan Your Next Adventure</h2>

        <form onSubmit={handleSignup} style={styles.form}>
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
            placeholder="Create a Password"
            style={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" style={styles.submitButton}>
            Create Account
          </button>
        </form>

        <p style={styles.promptText}>
          Already have an account?{" "}
          <Link href="/login" style={styles.promptLink}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

// --- Component Styles ---
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
  signupBox: {
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
    backgroundColor: '#27ae60', 
    color: 'white',
    padding: '0.9rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '0.5rem',
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
