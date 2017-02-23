import SidebarPresenter from '../../classes/Sidebar/SidebarPresenter';

function optionsPresenter(userData) {
    return {
        sidebar: SidebarPresenter(userData),
        user: userData,
    };
}

export default optionsPresenter;
