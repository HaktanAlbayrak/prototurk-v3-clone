import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export default function MenuItem({ item }) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        classNames(
          'px-3 h-9 flex items-center transition-colors rounded text-15  font-medium',
          {
            'text-zinc-800 dark:text-zinc-400': !isActive,
            'bg-zinc-100 text-primary dark:bg-blue-500/20 dark:text-white':
              isActive,
          }
        )
      }
    >
      {item.title}
    </NavLink>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
