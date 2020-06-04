import React from 'react';
// import fs from 'fs';
// import path from 'path';

const Home = ({ images }) => {
  return (
    <div>
      {/* {images.map(img => (
        <img key={img.filePath} src={img['filePath']} />
      ))} */}
    </div>
  );
};

// export async function getStaticProps() {
//   const postsDirectory = path.join(process.cwd(), 'public/img/showcase');
//   const filenames = fs.readdirSync(postsDirectory);

//   const images = filenames.map(filename => {
//     const filePath = path.join(postsDirectory, filename);

//     // Generally you would parse/transform the contents
//     // For example you can transform markdown to HTML here

//     return {
//       filePath,
//     };
//   });
//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       images,
//     },
//   };
// }

export default Home;
