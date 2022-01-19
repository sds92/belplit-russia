import { Main } from '../components/complicated';

export default function main(props) {
  return (
    <div>
      <Main content={props.content} {...props}/>
    </div>
  );
}
