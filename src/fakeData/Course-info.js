

var courses = [
    {
        id: 1,
        name: 'Cisco CCNA 200-301 – The Complete Guide to Getting Certified',
        instructor: 'Neil Anderson',
        image: 'https://img-a.udemycdn.com/course/240x135/1203374_6d6f_3.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(100 + Math.random() * 100)
    },
    {
        id: 2,
        name: 'Learn Python Programming Masterclass ',
        instructor: 'Tim Buchalka, Jean-Paul Roberts',
        image: 'https://img-a.udemycdn.com/course/240x135/629302_8a2d_2.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 3,
        name: 'Learn Ethical Hacking From Scratch ',
        instructor: 'Zaid Sabih, z Security',
        image: 'https://img-a.udemycdn.com/course/240x135/857010_8239_2.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(100 + Math.random() * 100)
    },
    {
        id: 4,
        name: 'Java Programming Masterclass for Software Developers ',
        instructor: 'Tim Buchalka, Tim Buchalkas Learn Programming Academy, Goran Lochert',
        image: 'https://img-a.udemycdn.com/course/240x135/533682_c10c_4.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 5,
        name: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        instructor: 'Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller',
        image: 'https://img-a.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(100 + Math.random() * 100)
    },
    {
        id: 6,
        name: 'The Complete Node.js Developer Course (3rd Edition) ',
        instructor: 'Andrew Mead, Rob Percival',
        image: 'https://img-a.udemycdn.com/course/240x135/922484_52a1_8.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 7,
        name: 'The Complete Web Developer in 2020: Zero to Mastery ',
        instructor: 'Andrei Neagoie',
        image: 'https://img-a.udemycdn.com/course/240x135/1430746_2f43_9.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(100 + Math.random() * 100)
    },
    {
        id: 8,
        name: 'The Complete Digital Marketing Course - 12 Courses in 1 ',
        instructor: 'Rob Percival, Daragh Walsh',
        image: 'https://img-a.udemycdn.com/course/240x135/914296_3670_8.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 9,
        name: 'Unreal Engine C++ Developer: Learn C++ and Make Video Games ',
        instructor: 'Sam Pattuzzi, Sam Pattuzzi',
        image: 'https://img-a.udemycdn.com/course/240x135/657932_c7e0_3.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(100 + Math.random() * 100)
    },
    {
        id: 10,
        name: 'The Ultimate Drawing Course - Beginner to Advanced ',
        instructor: 'Quinton Batchelor, Jaysen Batchelor',
        image: 'https://img-a.udemycdn.com/course/240x135/874012_c7f2_3.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 11,
        name: 'Python and Django Full Stack Web Developer Bootcamp ',
        instructor: 'Jose Portilla',
        image: 'https://img-a.udemycdn.com/course/240x135/822444_a6db.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(100 + Math.random() * 100)
    },
    {
        id: 12,
        name: 'Beginning C++ Programming - From Beginner to Beyond ',
        instructor: 'Tim Buchalkas Learn Programming Academy, Frank J. Mitropoulos',
        image: 'https://img-a.udemycdn.com/course/240x135/1576854_9aeb.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 13,
        name: 'The Complete Web Developer Course 2.0 ',
        instructor: 'Rob Percival, Codestars by Rob Percival',
        image: 'https://img-a.udemycdn.com/course/240x135/764164_de03_2.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(100 + Math.random() * 100)
    },
    {
        id: 14,
        name: 'User Experience Design Essentials - Adobe XD UI UX Design ',
        instructor: 'Daniel Walter Scott',
        image: 'https://img-a.udemycdn.com/course/240x135/1452908_8741_3.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 15,
        name: 'The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert ',
        instructor: 'Ian Schoonover',
        image: 'https://img-a.udemycdn.com/course/240x135/1187016_51b3.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(100 + Math.random() * 100)
    },
    {
        id: 16,
        name: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno) !',
        instructor: 'Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller',
        image: 'https://img-a.udemycdn.com/course/240x135/1879018_95b6.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 17,
        name: 'The Complete Digital Marketing Course - 12 Courses in 1 ',
        instructor: 'Rob Percival, Daragh Walsh',
        image: 'https://img-a.udemycdn.com/course/240x135/914296_3670_8.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 18,
        name: 'Learn Ethical Hacking From Scratch ',
        instructor: 'Zaid Sabih, z Security',
        image: 'https://img-a.udemycdn.com/course/240x135/857010_8239_2.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {   id: 19,
        name: 'Unreal Engine C++ Developer: Learn C++ and Make Video Games ',
        instructor: 'Sam Pattuzzi, Sam Pattuzzi',
        image: 'https://img-a.udemycdn.com/course/240x135/657932_c7e0_3.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(100 + Math.random() * 100)
    }
    ,
    {
        id: 20,
        name: 'Learn Python Programming Masterclass ',
        instructor: 'Tim Buchalka, Jean-Paul Roberts',
        image: 'https://img-a.udemycdn.com/course/240x135/629302_8a2d_2.jpg',
        price: Math.floor(100 + Math.random() * 100),
        review: Math.floor(1000 + Math.random() * 1000)
    }
]

export default courses;