const { Blog } = require('../models');

const blogData = [
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

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;