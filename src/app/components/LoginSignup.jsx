"use client";

import React, { useEffect, useState } from "react";
import { auth } from "../lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default function LoginSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("✅ Logged in successfully!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("✅ Account created successfully!");
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setMessage("🚪 Logged out!");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 text-blue-500 underline"
      >
        {isLogin
          ? "Don't have an account? Sign up"
          : "Already have an account? Login"}
      </button>

      {currentUser && (
        <button onClick={handleLogout} className="mt-4 text-red-500 underline">
          Logout
        </button>
      )}

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
