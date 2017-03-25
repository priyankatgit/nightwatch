var options = {
  slack_message: function(results, options) {
    return {
      text: 'Test completed, passed ' + results.passed + ', failed ' + results.failed,
      username: 'Nightwatch',
      icon_emoji: ':ghost:'
    }
  },
  slack_webhook_url: 'https://hooks.slack.com/services/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'
}

module.exports = {
  reporter: (require('nightwatch-slack-reporter')(options))
}
