const jsonData = require('../data.json')
const getData = (req,res) => {
    let utcT = new Date().toISOString()
    let date = new Date()
    let day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date)
    res.json(
        {
            "slack_name": req.query.slack_name,
            "current_day": day,
            "utc_time":utcT,
            "track": req.query.track,
            "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
            "github_repo_url": "https://github.com/username/repo",
            "status_code": 200
          }
    );
    
  };

  module.exports = {
    getData,
  };