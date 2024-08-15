const { getStore } = require("@netlify/functions");

exports.handler = async (event, context) => {
  const store = getStore("quiz_stats");

  try {
    const { score } = JSON.parse(event.body);

    // Get current stats
    let stats = await store.get("stats");
    if (!stats) {
      stats = { totalScore: 0, totalPlays: 0 };
    } else {
      stats = JSON.parse(stats);
    }

    // Update stats
    stats.totalScore += score;
    stats.totalPlays += 1;

    // Save updated stats
    await store.set("stats", JSON.stringify(stats));

    return {
      statusCode: 200,
      body: JSON.stringify({
        averageScore: stats.totalScore / stats.totalPlays,
        totalPlays: stats.totalPlays
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to update stats' })
    };
  }
};
