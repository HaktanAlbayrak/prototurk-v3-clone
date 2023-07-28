import { Form, Formik } from 'formik';
import Button from '~/components/button';
import Input from '~/components/input';
import ModalTitle from '~/components/modal/header';
import Or from '~/components/or';
import { modal } from '~/stores/modal/action';
import { registerSchema } from '~/validations';

export default function RegisterModal({ destroyAll }) {
  return (
    <div className='w-[500px] max-w-full'>
      <ModalTitle title='Hesap aç' />
      <Formik
        validationSchema={registerSchema}
        initialValues={{ usurname: '', password: '', email: '', rules: false }}
        onSubmit={(values) => {
          console.log('values', values);
        }}
      >
        <Form className='grid gap-y-4 p-4'>
          <Input name='username' label='kullanıcı adı' />
          <Input name='email' type='email' label='E-posta' />
          <Input name='password' type='password' label='Parola' />
          <Button>Hesap Aç</Button>
          <Or label='Zaten üye misin?' />
          <Button
            variant='primary-outline'
            onClick={() => {
              destroyAll();
              modal.append('auth.login');
            }}
          >
            Oturum Aç
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
