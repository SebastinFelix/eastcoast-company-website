'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [key, setKey] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!key.trim()) return;
    router.push(`/admin?key=${encodeURIComponent(key)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 w-full max-w-sm">
        <div className="font-heading font-bold text-xl text-gray-900 mb-1">
          Admin Access
        </div>
        <p className="text-sm text-gray-400 mb-6">Enter your admin key to view inquiries</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Admin key"
            value={key}
            onChange={(e) => { setKey(e.target.value); setError(false); }}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 caret-gray-900"
          />
          {error && <p className="text-xs text-red-500">Incorrect key</p>}
          <button
            type="submit"
            className="w-full py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-red-600 transition-colors"
          >
            Access Dashboard →
          </button>
        </form>
      </div>
    </div>
  );
}
