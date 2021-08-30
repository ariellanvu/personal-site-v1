import NavTab from 'components/nav/header/Tab';
import PropTypes from 'prop-types';

const propTypes = {
  activeSectionId: PropTypes.string.isRequired,
};

function NavTabs({ children, ...props }) {
  const { activeSectionId } = props;

  return (
    <nav
      className="NavTabs"
      sx={{
        position: 'relative',

        '[is-active="true"]': {
          fontWeight: 700,
          borderBottom: (t) => `2rem solid ${t.colors.text}`,
        },
      }}
    >
      <NavTab href="#home" displayName="Home" isActive={activeSectionId === 'home'} />
      <NavTab href="#about" displayName="About" isActive={activeSectionId === 'about'} />
      <NavTab href="#work" displayName="Work" isActive={activeSectionId === 'work'} />
      <NavTab href="#tech" displayName="Tech" isActive={activeSectionId === 'tech'} />
      <NavTab href="#contact" displayName="Contact" isActive={activeSectionId === 'contact'} />
    </nav>
  );
}

NavTabs.propTypes = propTypes;

export default NavTabs;