
const getData = (req,res) => {
    let utcT = new Date().toISOString().split('.')[0] + 'Z'
    let date = new Date()
    let day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date)
    res.json(
        {
            "slack_name": req.query.slack_name,
            "current_day": day,
            "utc_time":utcT,
            "track": req.query.track,
            "github_file_url": "https://github.com/ANNMAINAWANGARI/node-backend/blob/main/src/index.js",
            "github_repo_url": "https://github.com/ANNMAINAWANGARI/node-backend",
            "status_code": 200
          }
    );
    
  };

  module.exports = {
    getData,
  };