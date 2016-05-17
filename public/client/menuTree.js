const menuTree = {
  // change these key names to be pretty strings like 'related word'
  Root: {
    text: {
      content: '',
      leaf: true
    },

    source: {
      'random word': {
        'part of speech': ['adjective', 'adverb', 'noun', 'proper noun'],
        'min length': 0,
        'max length': 0,
        leaf: true
      },
      'related word': {
        relationship: ['synonym', 'antonym', 'rhyme'],
        target: null,
        leaf: true
      },
      'twitter': {
        'from where': ['my feed', 'random tweet'],
        keyword: '',
        leaf: true
      },
      news: {
        keyword: '',
        leaf: true
      },
      emoji: {
        type: ['trendy', 'people', 'nature', 'happy', 'unhappy'],
        leaf: true
      },
      wordlist: {
        list: null,
        leaf: true
      }
    },

    reaction: {
      type: [
        'emoji',
        'casual',
        'boring'
      ],
      target: null,
      leaf: true  
    }
  }
};

export default menuTree;