import madge from 'madge';

// madge('./src/App.tsx').then((res) => {
//   console.log(res.circularGraph());
// });

madge('./src/App.tsx')
  .then((res) => res.image('./image.jpg'))
  .then((writtenImagePath) => {
    console.log('Image written to ' + writtenImagePath);
  });
