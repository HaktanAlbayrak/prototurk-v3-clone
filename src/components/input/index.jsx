import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

export default function Input({ label, name, ...props }) {
  return (
    <div>
      {label && (
        <div className='mb-2.5 test-sm text-zinc-600 dark:text-zinc-400'>
          {label}
        </div>
      )}
      <Field
        name={name}
        className='w-full h-10 px-4 bg-zinc-50 dark:bg-transparent dark:border-zinc-700 border border-zinc-300 text-15 dark:text-white font-medium rounded outline-none  focus:border-black dark:focus:border-zinc-500'
        {...props}
      />
      <ErrorMessage
        component='small'
        name={name}
        className='text-red-500 dark:text-red-400 text-xs mt-1 block'
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  props: PropTypes.object,
};
