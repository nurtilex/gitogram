export default {
  posts: [
    {
      nickname: 'joshua_l',
      username: 'John',
      // imgPath: require('../../assets/joshua_l.svg'),
      title: 'Vue.js',
      subtitle:
        'JavaScript framework for building interactive web applications ⚡',
      comments: [
        {
          nickname: 'joshua_l',
          body: "Enable performance measuring in production, at the user's request",
          id: 0,
        },
        {
          nickname: 'Camille',
          body: "It's Impossible to Rename an Inherited Slot",
          id: 1
        },
        {
          nickname: 'Marselle',
          body: 'transition-group with flex parent causes removed items to fly',
          id: 2
        },
      ],
      date: '15 may',
      id: 0,
    },
    {
      nickname: 'Camille',
      username: 'Camille',
      // imgPath: require('../../assets/camille-post.svg'),
      title: 'React.js',
      subtitle:
        'Open source JavaScript library used for designing user interfaces',
      comments: [
        {
          nickname: 'joshua_l',
          body: "Enable performance measuring in production, at the user's request",
          id: 0
        },
        {
          nickname: 'Camille',
          body: "It's Impossible to Rename an Inherited Slot",
          id:1
        },
        {
          nickname: 'Marselle',
          body: 'transition-group with flex parent causes removed items to fly',
          id: 2
        },
      ],
      date: '15 may',
      id: 1,
    },
  ],
  users: [
    {
      name: 'John',
      isNew: true,
      id: 0,
    },
    {
      name: 'Marselle',
      isNew: true,
      id: 1,
    },
    {
      name: 'Alex',
      isNew: true,
      id: 2,
    },
    {
      name: 'Habib',
      isNew: true,
      id: 3,
    },
    {
      name: 'Piter',
      isNew: true,
      id: 4,
    },
    {
      name: 'Andrew',
      isNew: true,
      id: 5,
    },
    {
      name: 'Gay',
      isNew: false,
      id: 5,
    },
    {
      name: 'Camille',
      isNew: false,
      id: 6,
    },
    {
      name: 'Jane',
      isNew: false,
      id: 7,
    },
    {
      name: 'Andrew',
      isNew: false,
      id: 8,
    },
  ],
  navigationButtons: [
    {
      name: 'homepage',
      link: '#',
      alt: 'home icon',
      iconName: 'home.svg',
      id: 0,
    },
    {
      name: 'user icon',
      link: '#',
      alt: 'user icon',
      iconName: 'user-habib.svg',
      id: 1,
    },
    {
      name: 'logout',
      link: '#',
      alt: 'logout icon',
      iconName: 'logout.svg',
      id: 2,
    },
  ],

};
