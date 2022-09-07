return [
  {
    params: {
      // Statically Generates /posts/a/b/c
      id: ['a', 'b', 'c'],
    },
  },
  //...
];
export async function getStaticProps({ params }) {
  // params.id will be like ['a', 'b', 'c']
}
