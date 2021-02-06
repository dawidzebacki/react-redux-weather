import React from 'react'
import { NavbarContainer, Title, NavbarIconsContainer, GithubLink } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import { toggleDarkMode } from '../../store/actions/appActions';
import DarkModeToggle from 'react-dark-mode-toggle';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';

const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);


    return (
        <NavbarContainer>
            <Title>
                Weather
            </Title>
            <NavbarIconsContainer>
                <DarkModeToggle checked={isDarkMode} onChange={() => dispatch(toggleDarkMode())} size={60} />
                <GithubLink href="https://github.com/dawidzebacki/react-redux-weather">
                    <GithubIcon />
                </GithubLink>
            </NavbarIconsContainer>
        </NavbarContainer>
    )
}

export default Navbar;