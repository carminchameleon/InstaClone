const feedDatas = [
  {
    id: 1,
    userId: '@dominik_photography',
    likes: 356,
    comments: 256,
    userImg:
      'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/98419098_241835093901173_7720055465173843968_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wYWpEV2YUbcAX-nXpa6&oh=96d4a40c90f5ff375757854fdc008c74&oe=5F027A2C',
    postImg:
      'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    postContents: 'hello hello',
  },
  {
    id: 2,
    userId: 'jacob',
    likes: 336,
    comments: 2346,
    userImg:
      'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/92227338_2497944530469406_3021297677833863168_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=PfH0JuaTqToAX_ARrew&oh=78f8a3126b599413a3bada7f257b48bd&oe=5F0363C0',
    postImg:
      'https://images.unsplash.com/photo-1496208612508-eb52fba7d94e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'Match In the Rain',
  },

  {
    id: 3,
    userId: 'cassie',
    likes: 35,
    comments: 22,

    userImg:
      'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/73414114_2547376445282379_6117266579039191040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=xB8KbTnn4nsAX9Eyr--&oh=9e8cc0c2a1665a53e0d340cc64776b66&oe=5F037DF4',
    postImg:
      'https://images.unsplash.com/photo-1509460256263-94d60ef7f280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'Match In the Rain',
  },
  {
    id: 4,
    userId: 'nathan_',
    likes: 36,
    comments: 67,
    userImg:
      'http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/1_img_01.png',
    postImg:
      'https://images.unsplash.com/photo-1518911710364-17ec553bde5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'oh happyday',
  },

  {
    id: 5,
    userId: 'Neo',
    likes: 3146,
    comments: 254,
    userImg:
      'http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/4_img_01.png',
    postImg:
      'https://images.unsplash.com/photo-1495582575459-2eac77721458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'Today is the Day',
  },
  {
    id: 6,
    userId: 'Max',
    likes: 356,
    comments: 234,
    userImg:
      'http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/3_img_01.png',
    postImg:
      'https://images.unsplash.com/photo-1585848061832-19e2fd237f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'oh happyday',
  },
  {
    id: 7,
    userId: 'ANk',
    likes: 32,
    comments: 64,
    userImg:
      'http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/3_img_01.png',
    postImg:
      'https://images.unsplash.com/photo-1583265627959-fb7042f5133b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'Party timeeee',
  },
  {
    id: 8,
    userId6: 'austin_',
    likes: 65,
    comments: 23,
    userImg:
      'http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/5_img_01.png',
    postImg:
      'https://images.unsplash.com/photo-1493225774800-a08bb7034783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'TGIF',
  },
  {
    id: 9,
    userId: 'Richard',
    likes: 25,
    comments: 25,
    userImg:
      'https://images.unsplash.com/photo-1468186376524-b53e47314061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postImg:
      'https://images.unsplash.com/photo-1545867454-7b0a30dfce8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'hellohello',
  },
  {
    id: 10,
    userId: 'Sarha',
    likes: 46,
    comments: 223,
    userImg:
      'https://images.unsplash.com/photo-1479791261936-65db171c3cc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postImg:
      'https://images.unsplash.com/photo-1566428361455-cfd3b1a13280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'music is my life',
  },
  {
    id: 11,
    userId: '@dominik_photography',
    likes: 356,
    comments: 256,
    userImg:
      'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/98419098_241835093901173_7720055465173843968_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wYWpEV2YUbcAX-nXpa6&oh=96d4a40c90f5ff375757854fdc008c74&oe=5F027A2C',
    postImg:
      'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    postContents: 'hello hello',
  },
  {
    id: 12,
    userId: 'jacob',
    likes: 336,
    comments: 2346,
    userImg:
      'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/92227338_2497944530469406_3021297677833863168_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=PfH0JuaTqToAX_ARrew&oh=78f8a3126b599413a3bada7f257b48bd&oe=5F0363C0',
    postImg:
      'https://images.unsplash.com/photo-1496208612508-eb52fba7d94e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'Match In the Rain',
  },

  {
    id: 13,
    userId: 'cassie',
    likes: 35,
    comments: 22,
    userImg:
      'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/73414114_2547376445282379_6117266579039191040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=xB8KbTnn4nsAX9Eyr--&oh=9e8cc0c2a1665a53e0d340cc64776b66&oe=5F037DF4',
    postImg:
      'https://images.unsplash.com/photo-1509460256263-94d60ef7f280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'Match In the Rain',
  },
  {
    id: 14,
    userId: 'nathan_',
    likes: 36,
    comments: 67,
    userImg:
      'http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/1_img_01.png',
    postImg:
      'https://images.unsplash.com/photo-1518911710364-17ec553bde5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'oh happyday',
  },

  {
    id: 15,
    userId: 'Neo',
    likes: 3146,
    comments: 254,
    userImg:
      'http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/4_img_01.png',
    postImg:
      'https://images.unsplash.com/photo-1495582575459-2eac77721458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'Today is the Day',
  },
  {
    id: 16,
    userId: 'Max',
    likes: 356,
    comments: 234,
    userImg:
      'http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/3_img_01.png',
    postImg:
      'https://images.unsplash.com/photo-1585848061832-19e2fd237f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'oh happyday',
  },
  {
    id: 17,
    userId: 'ANk',
    likes: 32,
    comments: 64,
    userImg:
      'http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/3_img_01.png',
    postImg:
      'https://images.unsplash.com/photo-1583265627959-fb7042f5133b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'Party timeeee',
  },
  {
    id: 18,
    userId: 'austin_',
    likes: 65,
    comments: 23,
    userImg:
      'http://img.lifestyler.co.kr/NewIMG/frontenm/ch/tvn/2020/20200305_doctorlife_info/images/5_img_01.png',
    postImg:
      'https://images.unsplash.com/photo-1493225774800-a08bb7034783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'TGIF',
  },
  {
    id: 19,
    userId: 'Richard',
    likes: 25,
    comments: 25,
    userImg:
      'https://images.unsplash.com/photo-1468186376524-b53e47314061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postImg:
      'https://images.unsplash.com/photo-1545867454-7b0a30dfce8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'hellohello',
  },
  {
    id: 20,
    userId: 'Sarha',
    likes: 46,
    comments: 223,
    userImg:
      'https://images.unsplash.com/photo-1479791261936-65db171c3cc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postImg:
      'https://images.unsplash.com/photo-1566428361455-cfd3b1a13280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    postContents: 'music is my life',
  },
];
