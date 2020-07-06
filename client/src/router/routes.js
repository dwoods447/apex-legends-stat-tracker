import Profile from '../components/Profile'
import Main from '../components/Main'
import PageNotFound from '../components/PageNotFound'
import SoloSearch from '../components/single-squad-search/SingleSquadSearch'
import DuoSquadSearch from '../components/duo-squad-search/DuoSquadSearch'
import TrioSquadSearch from '../components/trio-squad-search/TrioSquadSearch'
const routes  = [
    {path: '/', component: Main, name: 'home'},
    {path: '/profile/:platform/:gamertag', component: Profile, name: 'profile'},
    {path: '/solo-search', component: SoloSearch, name: 'solosearch'},
    {path: '/duosquad-search', component: DuoSquadSearch, name: 'duosquadsearch'},
    {path: '/triosquad-search', component: TrioSquadSearch, name: 'triosquadsearch'},
    {path: '*', component: PageNotFound }
];

export default routes