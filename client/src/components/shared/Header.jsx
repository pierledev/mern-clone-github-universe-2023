import { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import { Link, useNavigate } from 'react-router-dom';
import { Container, ButtonLink, Logo } from '.';
import { headerLinks, headerCtas, headerAuthenticatedCtas } from '../../data';
import {
  HiOutlineBars3,
  HiOutlineXMark,
  HiChevronRight,
} from 'react-icons/hi2';

import styles from './Header.module.scss';
import toast from 'react-hot-toast';

const Header = () => {
  const { user, logout } = useAppContext();

  const navigate = useNavigate();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownLinksOpen, setIsDropdownLinksOpen] = useState(false);

  const handleIsNavOpen = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const handleIsDropdownLinksOpen = () => {
    setIsDropdownLinksOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    setIsNavOpen(false);
    toast.loading('Logging out...', { duration: 1500 });

    setTimeout(() => {
      logout();
      navigate('/');
    }, 1500);
  };

  const generateLinks = (links) => {
    const output = links.map((link) => {
      const { id, path, name, icon = '' } = link;

      return path ? (
        <li key={id}>
          <Link to={path} onClick={handleIsNavOpen}>
            {name}
          </Link>
        </li>
      ) : (
        <li key={id}>
          <button onClick={handleIsDropdownLinksOpen}>
            {name} {icon}
          </button>
          <ul className={isDropdownLinksOpen ? styles.active : ''}>
            {links.map((link) => {
              const { id, path, name } = link;

              return path ? (
                <li key={id}>
                  <Link to={path} onClick={() => setIsDropdownLinksOpen(false)}>
                    {name}
                  </Link>
                </li>
              ) : (
                ''
              );
            })}
          </ul>
        </li>
      );
    });

    return output;
  };

  const generateCtas = (ctas) => {
    const output = ctas.map((cta) => {
      const { id, path, name, button = false } = cta;

      if (button) {
        return (
          <li key={id}>
            <ButtonLink variant='primary' onClick={handleLogout}>
              <span>{name}</span> <HiChevronRight />
            </ButtonLink>
          </li>
        );
      }

      return (
        <li key={id}>
          <ButtonLink
            to={path}
            variant={id === 1 ? 'secondary' : 'primary'}
            onClick={handleIsNavOpen}
          >
            <span>{name}</span> <HiChevronRight />
          </ButtonLink>
        </li>
      );
    });

    return output;
  };

  return (
    <>
      <header className={styles.header}>
        <Container className={styles.header__container}>
          {/* Mobile */}
          <div className={styles.header__mobile}>
            <Logo onClick={() => setIsNavOpen(false)} />
            <button type='button' onClick={handleIsNavOpen}>
              {isNavOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
            </button>
          </div>

          {/* Desktop */}
          <div className={styles.header__desktop}>
            <Logo className={styles['header__desktop-logo']} />
            <nav className={styles['header__desktop-nav']}>
              <ul className={styles['header__desktop-links']}>
                {generateLinks(headerLinks)}
              </ul>
              <ul className={styles['header__desktop-ctas']}>
                {user
                  ? generateCtas(headerAuthenticatedCtas)
                  : generateCtas(headerCtas)}
              </ul>
            </nav>
          </div>
        </Container>
      </header>

      {isNavOpen && (
        <nav className={styles['header__mobile-nav']}>
          <ul className={styles['header__mobile-links']}>
            {generateLinks(headerLinks)}
          </ul>
          <ul className={styles['header__mobile-ctas']}>
            {user
              ? generateCtas(headerAuthenticatedCtas)
              : generateCtas(headerCtas)}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
