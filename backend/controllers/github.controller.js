const axios = require("axios");

exports.githubReview = async (req, res) => {
  try {
    const { repoUrl } = req.body;

    const parts = repoUrl.split("/");

    const owner = parts[3];
    const repo = parts[4];

    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}`
    );

    const data = response.data;

    res.json({
      review: `
# Repository Review

Repository: ${data.full_name}

⭐ Stars: ${data.stargazers_count}

🍴 Forks: ${data.forks_count}

📝 Description:
${data.description}

💻 Main Language:
${data.language}

📅 Last Updated:
${data.updated_at}

### Recommendations

- Add unit tests
- Improve documentation
- Add CI/CD pipeline
      `,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};