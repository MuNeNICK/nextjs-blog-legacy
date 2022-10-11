import fs from 'fs';

export const getStaticProps = () => {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
  const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    console.log('fileContent:', fileContent);
  });
  return {
    props: {
      posts: [],
    },
  };
};