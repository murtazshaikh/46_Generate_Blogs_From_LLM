import React, { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateBlog = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt.");
      return;
    }

    setError("");
    setBlog("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      console.log(data);

      if (data.blog) {
        setBlog(data.blog);
        setError("");
      } else if (data.error) {
        setError(data.error);
      } else {
        setError("Unexpected response from API.");
      }
    } catch (err) {
      setError("Failed to generate blog. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="heading">📝 Prompt-to-Blog Generator</h1>
      <textarea
        className="prompt-input"
        rows="4"
        placeholder="Enter your blog prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="generate-button"
        onClick={generateBlog}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Blog"}
      </button>
      {error && <p className="error-text">{error}</p>}
      {blog && (
        <div className="blog-output">
          <h2>📰 Generated Blog</h2>
          {blog.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
