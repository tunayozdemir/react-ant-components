import TablePageV1 from '../../Pages/Tables/TablePageV1'
import TablePageV2 from '../../Pages/Tables/TablePageV2'
import TablePageV3 from '../../Pages/Tables/TablePageV3'
import TablePageV4 from '../../Pages/Tables/TablePageV4'
import TablePageV5 from '../../Pages/Tables/TablePageV5'
import TablePageV6 from '../../Pages/Tables/TablePageV6'

const path = '';

const routes = [
  {
    path: `${path}/`,
    component: TablePageV1,
  },
  {
    path: `${path}/TablePageV2`,
    component: TablePageV2,
  },
  {
    path: `${path}/TablePageV3`,
    component: TablePageV3,
  },
  {
    path: `${path}/TablePageV4`,
    component: TablePageV4,
  },
  {
    path: `${path}/TablePageV5`,
    component: TablePageV5,
  },
  {
    path: `${path}/TablePageV6`,
    component: TablePageV6,
  },

];

export default routes;