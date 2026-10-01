export const CATEGORIES = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
  '+ More'
];

import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';

export const COURSES = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    author: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    category: 'UI/UX Design',
    isFeatured: true,
    thumbnail: card1,
    enrolledCount: '26+'
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    author: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    category: 'Graphic Design',
    isFeatured: true,
    thumbnail: card2,
    enrolledCount: '26+'
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    author: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    category: 'Data Science',
    isFeatured: true,
    thumbnail: card3,
    enrolledCount: '26+'
  },
  {
    id: 4,
    title: 'Balancing Productivity',
    author: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    category: 'Productivity',
    isFeatured: true,
    thumbnail: card4,
    enrolledCount: '26+'
  },
  {
    id: 5,
    title: 'Mastering Money Management',
    author: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    category: 'Freelance & Entrepreneurship',
    isFeatured: true,
    thumbnail: card5,
    enrolledCount: '26+'
  },
  {
    id: 6,
    title: 'From Idea to Startup Success',
    author: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: '$25',
    period: '/lifetime',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    category: 'Marketing',
    isFeatured: true,
    thumbnail: card6,
    enrolledCount: '26+'
  }
];

export const LEARNING_PATHS = [
  { id: 'design', name: 'Design', icon: 'Compass', color: '#CCFF00' },
  { id: 'dev', name: 'Development', icon: 'Code', color: '#CCFF00' },
  { id: 'it', name: 'IT & Software', icon: 'Monitor', color: '#CCFF00' },
  { id: 'business', name: 'Business', icon: 'Building2', color: '#CCFF00' },
  { id: 'marketing', name: 'Marketing', icon: 'Megaphone', color: '#CCFF00' },
  { id: 'photo', name: 'Photography', icon: 'Camera', color: '#CCFF00' }
];

import people1 from '../assets/people1.png';
import people2 from '../assets/people2.png';
import people3 from '../assets/people3.png';

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: people1,
    content: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."'
  },
  {
    id: 2,
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: people2,
    content: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."'
  },
  {
    id: 3,
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: people3,
    content: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."'
  }
];
