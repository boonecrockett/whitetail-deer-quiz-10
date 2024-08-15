const { getStore } = require("@netlify/functions");

exports.handler = async (event, context) => {
  console.log('getStats function called');
  const store = getStore("quiz_stats");

  try {
    let stats = await store.get("stats");
    console.log('Raw stats from store:', stats);
    if (!stats) {
      stats = { totalScore: 0, totalPlays: 0 };
    } else {
      stats = JSON.parse(stats);
    }
    console.log('Processed stats:', stats);

    return {
      statusCode: 200,
      body: JSON.stringify({
        averageScore: stats.totalPlays > 0 ? stats.totalScore / stats.totalPlays : 0,
        totalPlays: stats.totalPlays
      })
    };
  } catch (error) {
    console.error('Error in getStats function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch stats' })
    };
  }
};
