import { Main } from '../components/complicated';

export default function Home(props) {
  return (
    <div>
      <Main content={props.content} />
    </div>
  );
}
