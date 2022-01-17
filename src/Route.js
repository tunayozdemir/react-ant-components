import PageList from "./components/PageList/PageList"
import Sidebar from "./components/Sidebar/Sidebar"
import Tables from "./Pages/Tables/Tables"

const path = '';

const routes = [{
  path: `${path}/`,
  component: Sidebar,
},
{
  path: `${path}/PageList`,
  component: PageList,
},
{
  path: `${path}/Tables`,
  component: Tables,
}

];
export default routes;