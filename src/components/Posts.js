import List from '../App';

export default function Posts({ posts }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
