"use client";

import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null); // Clear any previous errors
      const response = await axios.post("/api/shorten", { originalUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error: any) {
      console.error(error);
      setError("Failed to shorten URL. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">URL Shortener</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="url"
            placeholder="Enter original URL"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className="p-3 border border-gray-300 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200 w-full text-center"
          >
            Shorten URL
          </button>
        </form>
        {shortUrl && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-gray-700">Shortened URL:</p>
            <a href={shortUrl} target="_blank" className="text-blue-600 underline mt-2 block break-all">
              {shortUrl}
            </a>
          </div>
        )}
        {error && (
          <div className="mt-4 text-red-500 text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
