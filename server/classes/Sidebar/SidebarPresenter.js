import Sidebar from './Sidebar';

function SidebarPresenter( userData ) {
    return (new Sidebar(userData)).getData();
}

export default SidebarPresenter;
