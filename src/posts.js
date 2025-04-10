const posts = [
  {
    title: "Dummy Title 1",
    content: "Dummy Content",
    author: "Test",
    comments: [
      { text: "Test!", author: "Commenter 1" },
      { text: "Test2", author: "Commenter 2" }
    ]
  },
  {
    title: "I love CUHK!",
    content: "Founded in 1963, The Chinese University of Hong Kong (CUHK) is a forward-looking comprehensive research university with a global vision and a mission to combine tradition with modernity, and to bring together China and the West. CUHK teachers and students hail from all around the world. CUHK graduates are connected worldwide through an extensive alumni network.",
    author: "CUHK Lover",
    comments: [
      { text: "CUHK is good!", author: "CU Cat" },
      { text: "Agree!", author: "Cu Mouse" },
    ]
  },
  {
    title: "I love IERG",
    content: "In this ever-changing information-centric world, data has enormous hidden value, which can be unlocked by advanced engineering techniques to create an impact on society. Through data generation and measurement, data transmission and networking to connect people and objects, coupled with advanced data processing and analytics, data can be enhanced into forward-looking information and predictions. Together with the added value of network security, we can realize many useful Internet and artificial intelligence applications, and achieve the goal of a smart world.",
    author: "IERG Lover",
    comments: [
      { text: "Test!", author: "Commenter 1" },
      { text: "Test2", author: "Commenter 2" }
    ]
  },
  {
    title: "Dummy Title 2",
    content: "Content ...",
    author: "XXXX",
    comments: [
      { text: "Test!", author: "Commenter 1" },
      { text: "Test2", author: "Commenter 2" }
    ]
  },
  {
    title: "Dummy Title 3",
    content: "Content ...",
    author: "XXXX",
    comments: [
      { text: "Test!", author: "Commenter 1" },
      { text: "Test2", author: "Commenter 2" }
    ]
  }
];

export function addPost(title, content, author = "Anonymous") {
  posts.push({
    title,
    content,
    author,
    comments: []
  });
}

export default posts;
