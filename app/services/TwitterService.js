import ApiService from './ApiService';

const TwitterService = {

  // API DOCS
  // https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline

  getTimeLine: (usr) => {
    return ApiService.get({
      url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + usr + '&count=40' //&max_id=964151653669711872'
    });
  },
};

export default TwitterService;
