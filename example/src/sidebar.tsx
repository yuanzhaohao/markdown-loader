import './sidebar.scss';

import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Layout, Menu } from 'dashkit-ui';
const { Sidebar } = Layout;
const { SubMenu, Item } = Menu;

interface SidebarProps extends RouteComponentProps<any> {
  pages: string[];
};

class AppSidebar extends React.PureComponent<SidebarProps> {
  render() {
    const { pages } = this.props;
    return (
      <Sidebar className="sidebar">
        <Menu
          className="sidebar-menu"
          defaultActive="Dashboard"
          defaultOpeneds={['Components']}
          onSelect={this.onMenuSelect}
        >
          <div className="sidebar-logo">
            <div className="sidebar-logo-title">Markdown-website-loader</div>
          </div>

          <Item icon="home" index="Dashboard">Dashboard</Item>
          <SubMenu icon="book-open" title="Components" index="Components">
            {pages && pages.length
              ? pages.map(page =>
                <Item key={page} index={page}>{page}</Item>
              )
              : null
            }
          </SubMenu>
        </Menu>
      </Sidebar>
    )
  }

  onMenuSelect = (index: string) => {
    const { pages, location, history } = this.props;
    const page = pages.indexOf(index) === -1 ? index : `/${index}`;

    if (location.pathname !== page) {
      history.push(page);
    }
  }
}

export default withRouter(AppSidebar);