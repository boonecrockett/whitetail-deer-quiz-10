const { getStore } = require("@netlify/functions");

exports.handler = async (event, context) => {
  const store = getStore("quiz_stats");

  try {
    let stats = await store.get("stats");
    if (!stats) {
      stats = { totalScore: 0, totalPlays: 0 };
    } else {
      stats = JSON.parse(stats);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        averageScore: stats.totalPlays > 0 ? stats.totalScore / stats.totalPlays : 0,
        totalPlays: stats.totalPlays
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch stats' })
    };
  }
};
