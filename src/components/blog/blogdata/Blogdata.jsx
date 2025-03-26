


import blog1 from "../images/blog1.jpg"
import blog2 from "../images/blog2.jpg"
 import blog3 from "../images/blog3.jpg"
 import blog4 from "../images/blog4.png"
 import blog5 from "../images/blog5.png"

const blogs = [
  {
    id: 1,
    title: 'Understanding the Basics of Web Development',
    author: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales urna ac sapien tempor, vitae feugiat nunc volutpat. Pellentesque habitant morbi tristique senectus et netus.',
    image: blog1,
    text:"National Education Day: How Rocket Learning is Revolutionizing Early Childhood Education (ECE) with Digital Innovation",
    blogtext:"National Education Day: How Rocket Learning is Revolutionizing Early Childhood Education (ECE) with Digital Innovation",
  },
  {
    id: 2,
    title: 'Top 10 CSS Tricks for Modern Web Design',
    author: 'Jane Smith',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
    image: blog2,
  },
  {
    id: 3,
    title: 'How to Stay Motivated While Learning Programming',
    author: 'Alice Johnson',
    content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    image: blog3,
  },
  {
    id: 4,
    title: 'The Future of Artificial Intelligence in Everyday Life',
    author: 'Bob Williams',
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.',
    image: blog4,
  },
  {
    id: 5,
    title: 'A Beginner’s Guide to Responsive Web Design',
    author: 'Clara Evans',
    content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    image: blog5,
  },
  {
    id: 6,
    title: 'Exploring the World of Open Source Software',
    author: 'Daniel Carter',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    image: blog1,
  },
  {
    id: 7,
    title: '10 Tips for Better Time Management as a Developer',
    author: 'Eve Martinez',
    content: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.',
    image: blog2,
  },
  {
    id: 8,
    title: 'The Rise of Blockchain Technology in 2025',
    author: 'Franklin White',
    content: 'Suspendisse potenti. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.',
    image: blog3,
  },
  {
    id: 9,
    title: 'Understanding JavaScript Closures with Simple Examples',
    author: 'Grace Thompson',
    content: 'Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.',
    image: blog4,
  },
  {
    id: 10,
    title: 'How Cloud Computing is Changing the Tech Landscape',
    author: 'Henry Baker',
    content: 'Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    image: blog5,
  },
  {
    id: 4,
    title: 'The Future of Artificial Intelligence in Everyday Life',
    author: 'Bob Williams',
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.',
    image: blog1,
  },
  {
    id: 5,
    title: 'A Beginner’s Guide to Responsive Web Design',
    author: 'Clara Evans',
    content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    image: blog2,
  },
  {
    id: 4,
    title: 'The Future of Artificial Intelligence in Everyday Life',
    author: 'Bob Williams',
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.',
    image: blog3,
  },
  {
    id: 5,
    title: 'A Beginner’s Guide to Responsive Web Design',
    author: 'Clara Evans',
    content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    image: blog4,
  },
  {
    id: 4,
    title: 'The Future of Artificial Intelligence in Everyday Life',
    author: 'Bob Williams',
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.',
    image: blog5,
  },
  {
    id: 5,
    title: 'A Beginner’s Guide to Responsive Web Design',
    author: 'Clara Evans',
    content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    image: blog1,
  },
  {
    id: 4,
    title: 'The Future of Artificial Intelligence in Everyday Life',
    author: 'Bob Williams',
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.',
    image: blog3,
  },
  {
    id: 5,
    title: 'A Beginner’s Guide to Responsive Web Design',
    author: 'Clara Evans',
    content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    image: blog4,
  },
];

export default blogs;




  