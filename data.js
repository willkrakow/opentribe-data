/*
  Add any fields or nested data structures that you want.
*/

exports.account_info_credentials = {
  // Medium.com login
  // We could also use a webhook to post content via Zapier, which would make it easy to send an email to users when we post new blogs
  // Hook URL to POST: https://hooks.zapier.com/hooks/catch/1899027/o1g72fd/

  email: 'wkrakow@plantpurenation.om',
  client_ID: '',
  client_Secret: '',
  access_token: '',
  scope: '',
  expires_at: ''
  // ex: medium.com should have a PlantPure account
  //     and i'll need the login/any available api keys, etc
};

exports.ideas_for_login_marketing = {

};

exports.general_content = {
  home_page_banner_image: '',
  browse_projects_banner_image: '',
  link_to_plantpure_intro_video: 'https://www.youtube.com/watch?v=k_IvIwQBIwg',
  link_to_mission_video: 'https://youtu.be/vp5dJ-O-AQg',
  link_to_opentribe_intro: 'https://youtu.be/wjOCXgUYvhU'
};

exports.remote_events = [
  {
    title: 'PlantPure Health Seminar Presentation - Denver',
    start: 'August 3, 2020 at 6:30pm', // use a human readable date, best guess, or leave blank
    description: 'Join us and learn how a plant-based diet can improve your energy levels, mental clarity, and athletic performance. We hope to see you there!',
    link: 'https://zoom.com/',
    link_to_album: ''
  },
  {
    title: 'Dr. Campbell on the link between COVID-19 and diet',
    start: 'July 9, 2020 at 12:30pm', // use a human readable date, best guess, or leave blank
    description: 'Dr. T. Colin Campbell discusses the novel coronavirus, COVID-19, and how diet can affect your risk of severe infection.',
    link: 'https://zoom.com/',
    link_to_album: ''
  }
];

exports.projects = [
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    resource_link: 'https://drive.google.com/open?id=1qLRk8dkrMUz9Qod6Z8OZejVEEnHptGne',
    strategy_overview_link: 'https://drive.google.com/open?id=1k1sfcKlo-naF9emlo1zAsJ4QvsiJtjfj',
    cover_image: '',
    title: 'Seminar Campaign',
    video_link: 'https://youtu.be/jHV6nP-c_Dk'
  },
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    resource_link: 'https://drive.google.com/open?id=14nGeqKGEUwg0pZsEYzl8yopzMHTKV4sI',
    strategy_overview_link: 'https://drive.google.com/open?id=1S1qCAWiq1avMWCqGLVFDjNqrRKRiHNvb',
    cover_image: 'https://cdn.pixabay.com/photo/2017/07/23/16/01/nature-2531761_1280.jpg',
    title: 'Pod Network',
    video_link: 'https://youtu.be/UUTy9uWaHlQ'
  },
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    resource_link: 'https://drive.google.com/open?id=1yszpzaeKGL9sm2AjlfcDQ1GjVSJmT3iZ',
    strategy_overview_link: 'https://drive.google.com/open?id=1pDyqP-1C-KFZFB1wueSnSlkXYUwKPhGq',
    cover_image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Healthcare Providers',
    video_link: 'https://www.youtube.com/watch?v=XmPFF_KFWYk'
  },
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    resource_link: 'https://drive.google.com/open?id=1GBX1yRF90Oy1nfEgAW6KNHKNpZfNOUaR',
    strategy_overview_link: 'https://drive.google.com/open?id=1LwI0O_AW1xXnqs9SYoybSxHbMXWUPOm4',
    cover_image: 'https://cdn.pixabay.com/photo/2015/01/08/18/26/write-593333_1280.jpg',
    title: 'Employers',
    video_link: 'https://youtu.be/MKZbEdw1O1c'
  },
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    resource_link: 'https://drive.google.com/open?id=1WjKFbX2ExDHAEuKvvU8PB4-Txvusye5T',
    strategy_overview_link: 'https://drive.google.com/open?id=1ymqk7r-FOAtK9LCHhdVYW5JRXfLIcfdG',
    cover_image: 'https://cdn.pixabay.com/photo/2016/06/29/08/50/pencil-1486278_1280.jpg',
    title: 'Schools and Hospitals',
    video_link: ''
  },
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    resource_link: 'https://drive.google.com/open?id=1FCFKTVj1_luwvdIsf3PSs6Hk0h_hGXEw',
    strategy_overview_link: 'https://drive.google.com/open?id=1OtFy0Dq3QGRxgxs-vJFdXYZzRbWtm8cx',
    cover_image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/green-1072828_1280.jpg',
    title: 'Reforestation Campaign',
    video_link: 'https://www.youtube.com/watch?v=WZsFNECR3xs'
  },
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    resource_link: 'https://drive.google.com/open?id=18I49XRb7t9gziFvHoQQyz6dtXvQvPMy5',
    strategy_overview_link: 'https://drive.google.com/open?id=1T7n6nIyMU7_T-kPv216kIhZH9P9TwR2_',
    cover_image: '',
    title: 'Underserved Neighborhoods',
    video_link: 'https://www.youtube.com/watch?v=SVtSMXXQHZU'
  }
]

exports.sponsors = [
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    name: 'PlantPure Communities',
    description: 'PPC offers programs, resources, tools, and knowledge to empower community leaders, activists, and advocates, in order to help educate people about evidence-based nutrition that shows that optimal health may be achieved through a whole food, plant-based (WFPB) diet',
    link: 'https://plantpurecommunities.org/',
    cover_image: '',
    link_to_album: ''
  },
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    name: 'Center for Nutrition Studies',
    description: 'At the T. Colin Campbell Center for Nutrition Studies, we believe that you have the right to better health and better information. We advocate for evidence-based education and resources. The cornerstone of this education is our Plant-Based Nutrition Certificate program in partnership with eCornell featuring lectures from over 20 MDs, PhDs, RDs, RNs and more. We also offer a wide variety of plant-based resources through our website including hundreds of articles, recipes, videos and more.',
    link: 'https://nutritionstudies.org/',
    cover_image: '',
    link_to_album: ''
  },
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    name: 'The Plantrician Project',
    description: 'The mission of the Plantrician Project is to educate, equip and empower our physicians, healthcare providers and other healing influencers with knowledge about the indisputable benefits of whole food plant-based nutrition.',
    link: 'https://plantricianproject.org/',
    cover_image: '',
    link_to_album: ''
  },
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    name: 'PlantPure, Inc.',
    description: 'PlantPure sells whole food, plant-based meals nationwide and has committed to donating 50% of future profits to organizations that are building a plant-based world.',
    link: 'https://plantpurenation.com/',
    cover_image: '',
    link_to_album: ''
  },
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    name: 'Balanced',
    description: 'Balanced is a network of public health professionals, nutrition science experts, and everyday people from around the world fighting for a healthier food system one menu at a time.',
    link: 'https://balanced.org/',
    cover_image: '',
    link_to_album: ''
  },
  {
    image_aspect: {
      width: 3,
      height: 1
    },
    name: 'Physicians Committee for Responsible Medicine',
    description: 'The Physicians Committee combines the clout and expertise of more than 12,000 physicians with the dedicated actions of more than 175,000 members across the United States and around the world.',
    link: 'https://pcrm.org/',
    cover_image: '',
    link_to_album: ''
  }
];

exports.media_links = [
  {
    image_aspect: {
      width: 4,
      height: 1
    },
    title: 'The Beet',
    description: 'We\'re a new plant-based platform where food, health, news, reviews, expert advice and the culture meet. The Beet covers everything from restaurants to eat vegan near you, to the latest food products that make it even easier to eat plant-based, to which whole foods to eat daily to get the right amount of protein, iron and other essential nutrients.',
    link: 'https://thebeet.com/',
    cover_image: '',
    link_to_album: ''
  },
  {
    image_aspect: {
      width: 4,
      height: 1
    },
    title: 'Forks Over Knives',
    description: 'Forks Over Knives empowers people to live healthier lives by changing the way the world understands nutrition.',
    link: 'https://forksoverknives.com/',
    cover_image: '',
    link_to_album: ''
  }
];

exports.media_announcements = [
    {
      image_aspect: {
        width: 4,
        height: 1
      },
      title: 'An interview with Dr. T. Colin Campbell on relationship between COVID-19 and nutrition',
      description: 'We sat down (virtually, of course) with Dr. T. Colin Campbell, author of The China Study, to discuss how a plant-based diet can reduce your risk of severe infection from the novel coronavirus.',
      link: 'https://vimeo.com/404831801',
      cover_image: '',
      link_to_album: ''
    }
  ];

  exports.media_videos = [
    {
      image_aspect: {
        width: 4,
        height: 1
      },
      title: 'Cooking up health for low-income communities',
      description: 'Nelson Campbell, founder and CEO of PlantPure and director of PlantPure Nation, travels to the Vatican to share the plant-based message with top advisors to Pope Francis.',
      link: 'https://www.romereports.com/en/2020/03/01/cooking-up-health-for-low-income-communities/',
      cover_image: '',
      link_to_album: ''
    },
    {
      image_aspect: {
        width: 4,
        height: 1
      },
      title: 'PlantPure Stories: For Health Improvement',
      description: 'Dr. Diego Ponieman works with Harlem residents to combat high blood pressure and diabetes through plant-based eating.',
      link: 'https://www.youtube.com/watch?v=FOyZUI2kcHk',
      cover_image: ''
    },
    {
      image_aspect: {
        width: 4,
        height: 1
      },
      title: 'PlantPure Stories: A Healthy Future',
      description: 'Haley promotes plant-based eating to elementary school students in Florence, SC.',
      link: 'https://www.youtube.com/watch?v=s9AAlKThzME',
      cover_image: ''    
    },
    {
      image_aspect: {
        width: 4,
        height: 1
      },
      title: 'PlantPure Stories: Physically and Emotionally Better',
      description: 'John is a former marine and BBQ lover who adopted a plant-based diet to protect the animals he once hunted.',
      link: 'https://www.youtube.com/watch?v=lNCWTry6kYY',
      cover_image: '',
      link_to_album: ''
    },
    {
      image_aspect: {
        width: 4,
        height: 1
      },
      title: 'PlantPure Stories: For Speed',
      description: 'Kera is a professional mountain biker who lives in a van so she can travel the country winning race after race. Her secret to success? She\'s fueled by a whole food, plant-based diet.',
      link: 'https://www.youtube.com/watch?v=CqGv2v1_fjo',
      cover_image: '',
      link_to_album: ''
    },
    {
      image_aspect: {
        width: 4,
        height: 1
      },
      title: 'Confronting Reductionism Webinar',
      description: 'Confronting Reductionism - An interview with Dr. T. Colin Campbell.',
      link: 'https://www.youtube.com/watch?v=lNCWTry6kYY',
      cover_image: '',
      link_to_album: ''
    }
  ];

exports.blogs = [
  {
    image_aspect: {
      width: 2,
      height: 1
    },
    note: 'Ex. This should display on the home page banner left button',
    title: 'Feature Roadmap',
    description: '',
    link: '',
    cover_image: ''
  },
  {
    image_aspect: {
      width: 2,
      height: 1
    },
    note: 'Ex. This should display on the home page banner left button',
    title: 'Introduction',
    description: '',
    link: '',
    cover_image: ''
  }
];