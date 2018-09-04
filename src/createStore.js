export default function createStore(reducer) {
    let state = null;
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        //每次更新函数都会执行监听函数（这里就是renderApp），以此重新渲染页面
        listeners.forEach((listener) => listener())
    };
    dispatch({})
    return {getState, dispatch, subscribe}
}