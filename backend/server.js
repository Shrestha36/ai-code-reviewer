require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);
app.use(express.json());

if (!process.env.GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY is missing in .env file");
  process.exit(1);
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend running 🚀",
  });
});

app.post("/api/review", async (req, res) => {
  try {
    const { language, code } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Review this code and provide bugs, security issues, performance improvements and best practices.",
        },
        {
          role: "user",
          content: code,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    // AI Review
    const review = completion.choices[0].message.content;

    // Vulnerability Analysis
    let high = 0;
    let medium = 0;
    let low = 0;

    if (code.includes("password")) high++;

    if (code.includes("eval(")) high++;

    if (code.includes("console.log")) medium++;

    if (code.includes("any")) low++;

    // Confidence Score
    const confidence = 95;

    res.json({
      review,
      confidence,
      vulnerabilities: {
        high,
        medium,
        low,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to review code",
    });
  }
});

app.post("/api/explain", async (req, res) => {
  try {
    const { line } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
You are a Senior Software Architect.

Analyze the provided code line and return ONLY:

🧠 Purpose
⚡ Performance Impact
🧮 Memory Impact
🔒 Security Concerns
✅ Recommendation

Keep each section under 2 sentences.
Use concise bullet points.
`,
        },
        {
          role: "user",
          content: line,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    res.json({
      explanation: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to explain line",
    });
  }
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
