import Search from './components/SearchPage'
import reducers from './reducers'
import withState from '../../redux/withState'
import INITIAL_STATE from './INITIAL_STATE'

export default withState(Search, reducers, INITIAL_STATE)
