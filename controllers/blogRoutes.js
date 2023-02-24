const router = require('express').Router();
const { Blog } = require('../models');

const blogs = [
    {
        id: 1,
        blogger_name: 'Alex',
        blog_title: 'Why MVC is so Important',
        blog_content: 'MVC is important because...',
        blog_post_time: '1/8/2023'
    },
    {
        id: 2,
        blogger_name: 'Steve',
        blog_title: 'Test Title',
        blog_content: 'Test Content',
        blog_post_time: '1/3/2023'
    }
];

//returns homepage if route is anything
// router.get('*', async (req, res) => {
//     res.render('homepage.hbs', { 
//         layout: 'layouts/main.hbs',
//         show_blog: blogs
//     });
// });

//get all blogs
router.get('/', async (req, res) => {
    res.render('homepage.hbs', { 
        layout: 'layouts/main.hbs',
        // show_blog: new Blog
        show_blog: blogs
    });
});

//get one blog
// router.get('/home/:num', async (req, res) => {
//     return res.render('blog', blogs[req.params.num -1]);
// });

//get login page
router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login', {
        layout: 'layouts/main.hbs',
    });
});

//get signup page
router.get('/signup', async (req, res) => {
    // if (req.session.logged_in) {
    //     res.redirect('/profile');
    //     return;
    // }
    res.render('signup', {
        layout: 'layouts/main.hbs',
    });
});

//get dashboard page
router.get('/dashboard', async (req, res) => {
    // if (req.session.logged_in) {
    //     res.redirect('/profile');
    //     return;
    // }
    res.render('dashboard', {
        layout: 'layouts/main.hbs',
    });
});

module.exports = router;