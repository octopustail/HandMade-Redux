import { connect } from 'react-redux'
import ThemeSwitch from '../Component/Themecolor'

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)