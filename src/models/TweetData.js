const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
  contributors: {
    type: 'Mixed'
  },
  truncated: {
    type: 'Boolean'
  },
  text: {
    type: 'String'
  },
  is_quote_status: {
    type: 'Boolean'
  },
  in_reply_to_status_id: {
    type: 'Mixed'
  },
  id: {
    type: 'Number'
  },
  favorite_count: {
    type: 'Number'
  },
  entities: {
    user_mentions: {
      type: 'Array'
    },
    symbols: {
      type: 'Array'
    },
    hashtags: {
      type: 'Array'
    },
    urls: {
      type: [
        'Mixed'
      ]
    }
  },
  quoted_status_id: {
    type: 'Number'
  },
  retweeted: {
    type: 'Boolean'
  },
  coordinates: {
    type: 'Mixed'
  },
  timestamp_ms: {
    type: 'String'
  },
  quoted_status: {
    contributors: {
      type: 'Mixed'
    },
    truncated: {
      type: 'Boolean'
    },
    text: {
      type: 'String'
    },
    is_quote_status: {
      type: 'Boolean'
    },
    in_reply_to_status_id: {
      type: 'Mixed'
    },
    id: {
      type: 'Number'
    },
    favorite_count: {
      type: 'Number'
    },
    source: {
      type: 'String'
    },
    retweeted: {
      type: 'Boolean'
    },
    coordinates: {
      type: 'Mixed'
    },
    entities: {
      user_mentions: {
        type: 'Array'
      },
      symbols: {
        type: 'Array'
      },
      hashtags: {
        type: [
          'Mixed'
        ]
      },
      urls: {
        type: [
          'Mixed'
        ]
      },
      media: {
        type: [
          'Mixed'
        ]
      }
    },
    in_reply_to_screen_name: {
      type: 'Mixed'
    },
    id_str: {
      type: 'String'
    },
    retweet_count: {
      type: 'Number'
    },
    in_reply_to_user_id: {
      type: 'Mixed'
    },
    favorited: {
      type: 'Boolean'
    },
    user: {
      follow_request_sent: {
        type: 'Mixed'
      },
      profile_use_background_image: {
        type: 'Boolean'
      },
      default_profile_image: {
        type: 'Boolean'
      },
      id: {
        type: 'Number'
      },
      verified: {
        type: 'Boolean'
      },
      profile_image_url_https: {
        type: 'String'
      },
      profile_sidebar_fill_color: {
        type: 'String'
      },
      profile_text_color: {
        type: 'String'
      },
      followers_count: {
        type: 'Number'
      },
      profile_sidebar_border_color: {
        type: 'String'
      },
      id_str: {
        type: 'String'
      },
      profile_background_color: {
        type: 'String'
      },
      listed_count: {
        type: 'Number'
      },
      profile_background_image_url_https: {
        type: 'String'
      },
      utc_offset: {
        type: 'Number'
      },
      statuses_count: {
        type: 'Number'
      },
      description: {
        type: 'String'
      },
      friends_count: {
        type: 'Number'
      },
      location: {
        type: 'String'
      },
      profile_link_color: {
        type: 'String'
      },
      profile_image_url: {
        type: 'String'
      },
      following: {
        type: 'Mixed'
      },
      geo_enabled: {
        type: 'Boolean'
      },
      profile_banner_url: {
        type: 'String'
      },
      profile_background_image_url: {
        type: 'String'
      },
      name: {
        type: 'String'
      },
      lang: {
        type: 'String'
      },
      profile_background_tile: {
        type: 'Boolean'
      },
      favourites_count: {
        type: 'Number'
      },
      screen_name: {
        type: 'String'
      },
      notifications: {
        type: 'Mixed'
      },
      url: {
        type: 'String'
      },
      created_at: {
        type: 'Date'
      },
      contributors_enabled: {
        type: 'Boolean'
      },
      time_zone: {
        type: 'String'
      },
      protected: {
        type: 'Boolean'
      },
      default_profile: {
        type: 'Boolean'
      },
      is_translator: {
        type: 'Boolean'
      }
    },
    geo: {
      type: 'Mixed'
    },
    in_reply_to_user_id_str: {
      type: 'Mixed'
    },
    possibly_sensitive: {
      type: 'Boolean'
    },
    lang: {
      type: 'String'
    },
    created_at: {
      type: 'Date'
    },
    filter_level: {
      type: 'String'
    },
    in_reply_to_status_id_str: {
      type: 'Mixed'
    },
    place: {
      type: 'Mixed'
    },
    extended_entities: {
      media: {
        type: [
          'Mixed'
        ]
      }
    }
  },
  source: {
    type: 'String'
  },
  in_reply_to_screen_name: {
    type: 'Mixed'
  },
  id_str: {
    type: 'String'
  },
  retweet_count: {
    type: 'Number'
  },
  in_reply_to_user_id: {
    type: 'Mixed'
  },
  favorited: {
    type: 'Boolean'
  },
  user: {
    follow_request_sent: {
      type: 'Mixed'
    },
    profile_use_background_image: {
      type: 'Boolean'
    },
    default_profile_image: {
      type: 'Boolean'
    },
    id: {
      type: 'Number'
    },
    verified: {
      type: 'Boolean'
    },
    profile_image_url_https: {
      type: 'String'
    },
    profile_sidebar_fill_color: {
      type: 'String'
    },
    profile_text_color: {
      type: 'String'
    },
    followers_count: {
      type: 'Number'
    },
    profile_sidebar_border_color: {
      type: 'String'
    },
    id_str: {
      type: 'String'
    },
    profile_background_color: {
      type: 'String'
    },
    listed_count: {
      type: 'Number'
    },
    profile_background_image_url_https: {
      type: 'String'
    },
    utc_offset: {
      type: 'Number'
    },
    statuses_count: {
      type: 'Number'
    },
    description: {
      type: 'String'
    },
    friends_count: {
      type: 'Number'
    },
    location: {
      type: 'String'
    },
    profile_link_color: {
      type: 'String'
    },
    profile_image_url: {
      type: 'String'
    },
    following: {
      type: 'Mixed'
    },
    geo_enabled: {
      type: 'Boolean'
    },
    profile_banner_url: {
      type: 'String'
    },
    profile_background_image_url: {
      type: 'String'
    },
    name: {
      type: 'String'
    },
    lang: {
      type: 'String'
    },
    profile_background_tile: {
      type: 'Boolean'
    },
    favourites_count: {
      type: 'Number'
    },
    screen_name: {
      type: 'String'
    },
    notifications: {
      type: 'Mixed'
    },
    url: {
      type: 'Mixed'
    },
    created_at: {
      type: 'Date'
    },
    contributors_enabled: {
      type: 'Boolean'
    },
    time_zone: {
      type: 'String'
    },
    protected: {
      type: 'Boolean'
    },
    default_profile: {
      type: 'Boolean'
    },
    is_translator: {
      type: 'Boolean'
    }
  },
  geo: {
    type: 'Mixed'
  },
  in_reply_to_user_id_str: {
    type: 'Mixed'
  },
  possibly_sensitive: {
    type: 'Boolean'
  },
  lang: {
    type: 'String'
  },
  created_at: {
    type: 'Date'
  },
  quoted_status_id_str: {
    type: 'String'
  },
  filter_level: {
    type: 'String'
  },
  in_reply_to_status_id_str: {
    type: 'Mixed'
  },
  place: {
    type: 'Mixed'
  }
})

mongoose.model('Tweet', tweetSchema)
