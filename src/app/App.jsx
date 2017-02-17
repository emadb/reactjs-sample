import ReactDom from 'react-dom'
//import Counter from './Counter'
import SearchPage from './Search/SearchPage'
import ArtistDetailPage from './ArtistDetail/ArtistDetailPage'
import {Router, Route, hashHistory} from 'react-router'

require('../sass/style.scss')

ReactDom.render((
  <Router history={hashHistory}>
    <Route path='/artists' component={SearchPage} />
    <Route path='/artists/:id' component={ArtistDetailPage} />
  </Router>
), document.getElementById('app'))
