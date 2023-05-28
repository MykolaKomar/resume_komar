// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Mykola',
    lastname: 'Komar',
  },

  position: 'Junior Fullstack JS Developer',

  salary: '600$ on month',
  adress: 'Ukrain, Kyiv, str. Maksyma Kryvonosa, 4',
}
var footer = {
  sotial: {
    email: {
      text: 'kolya.komar0519@gmail.com',
      href: 'mailto:kolya.komar0519@mail.com',
    },
    phone: {
      text: '+380977576933',
      href: 'tel:+80977576933',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mykola-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
      work on a new project I learn the domain and try to understand the idea of the project. Good team
      player, every colleague is a friend to me.`,
      },

      experiens: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
        tournament position, goals etc), analyzing by simple mathematics models and preparing probability
        for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: '10',
          isTop: true,
        },
        {
          name: 'Handlerbar',
          point: '10',
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: '9',
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: '7',
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Football',
          isMain: true,
        },
        {
          name: 'Futsal',
          isMain: true,
        },
        {
          name: 'Voleyball',
          isMain: false,
        },
      ],
    },

    footer,
  })
})
// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'KNUCA',
          isEnd: true,
        },
        {
          name: 'NAU',
          isEnd: false,
        },
        {
          name: 'KNUTD',
          isEnd: true,
        },
        {
          name: 'KNUKIM',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'FullStack Developer JS',
          id: 1111,
        },
        {
          name: 'FullStack Developer Pyton',
          id: 2222,
        },
        {
          name: 'FullStack Developer Java',
          id: 3333,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior FullStack developer',
          company: {
            name: 'IT Brains',
            url: null,
          },

          duration: {
            from: '01.07.2018',
            to: null,
          },
          projectAmount: '3',
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'I think this course very interesting ',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML | CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'I am winer',
                },
                {
                  name: 'MVP  ',
                },
              ],
              stackAmount: '5',
              awardAmount: '4',
            },
          ],
        },
      ],
    },

    footer,
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St,',
        city: 'New York,',
        state: 'NY,',
        zip: '10001,',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
