import Search from './components/SearchPage'
import reducers from './reducers'
import Wrapper from '../../redux/Wrapper'
import INITIAL_STATE from './INITIAL_STATE'

export default Wrapper(Search, reducers, INITIAL_STATE)
