import Button from '~/components/button';
import { modal } from '~/stores/modal/action';

export default function Auth() {
  return (
    <div>
      <Button
        onClick={() =>
          modal.append('auth.login', { name: 'haktan', surname: 'albayrak' })
        }
        type='button'
      >
        Giriş yap
      </Button>
    </div>
  );
}
