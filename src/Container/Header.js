import { connect } from 'react-redux'
import Header from '../Component/Header'

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
export default connect(mapStateToProps)(Header)
