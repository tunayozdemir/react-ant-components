import Dashboard from '../../Pages/Dashboard/Dashboard'
import Buttons from '../../Pages/Buttons/Buttons'
import InputForm from '../../Pages/Inputs/InputForm'
import GsmInputPage from '../../Pages/Inputs/GsmInputPage'
import Cards from '../../Pages/Cards/Cards'
import RadioButtons from '../../Pages/RadioButtons/RadioButtons'
import ImageCrop from '../../Pages/ImageCrop/ImageCrop'
import TablePageV1 from '../../Pages/Tables/TablePageV1'
import TablePageV2 from '../../Pages/Tables/TablePageV2'
import TablePageV3 from '../../Pages/Tables/TablePageV3'
import TablePageV4 from '../../Pages/Tables/TablePageV4'
import TablePageV5 from '../../Pages/Tables/TablePageV5'
import TablePageV6 from '../../Pages/Tables/TablePageV6'
import TablePageV7_Dnd from '../../Pages/Tables/TablePageV7_Dnd'
import CopyToBoard from '../../Pages/CopyToElements/CopyToBoard'
import CopyToText from '../../Pages/CopyToElements/CopyToText'


const path = '';

const routes = [

  {
    path: `${path}/`,
    component: Dashboard,
  },
  {
    path: `${path}/Buttons`,
    component: Buttons,
  },
  {
    path: `${path}/InputForm`,
    component: InputForm,
  },
  {
    path: `${path}/GsmInputPage`,
    component: GsmInputPage,
  },
  {
    path: `${path}/ImageCrop`,
    component: ImageCrop,
  },
  {
    path: `${path}/Cards`,
    component: Cards,
  },
  {
    path: `${path}/RadioButtons`,
    component: RadioButtons,
  },
  {
    path: `${path}/TablePageV1`,
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
  {
    path: `${path}/TablePageV7_Dnd`,
    component: TablePageV7_Dnd,
  },
  {
    path: `${path}/CopyToBoard`,
    component: CopyToBoard,
  },
  {
    path: `${path}/CopyToText`,
    component: CopyToText,
  },

];

export default routes;