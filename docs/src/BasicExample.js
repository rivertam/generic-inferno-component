import Inferno from 'inferno';
import Generic from '@rivertam/generic-inferno-component';

export default function BasicExample() {
  return (
    <Generic>Hi <span role="img" aria-label="heart">❤️</span></Generic>
  );
}
