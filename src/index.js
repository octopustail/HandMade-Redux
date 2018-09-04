import createStore from './createStore'


function stateChanger(state, action) {
    if (!state) {
        return {
            title: {
                text: 'React.js 小书',
                color: 'red'
            },
            content: {
                text: 'React.js 小书内容',
                color: 'blue'
            }
        };
    }

    switch (action.type) {
        case 'UPDART_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                },
            };
        case 'UPDATE_TITLE_COLOR': {
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        }

        default:
            return state

    }
}

const store = createStore(stateChanger);
//添加观察者，监听函数
let oldState = store.getState()
store.subscribe(() => {
        const newState = store.getState();
        renderApp(newState, oldState);
        oldState = newState;
    }
);


//实际执行渲染到DOM
function renderTitle(newTitle, oldTitle = {}) {
    if (newTitle === oldTitle) return;

    console.log('render Title')
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = newTitle.text;
    titleDOM.style.color = oldTitle.color;
}

function renderContent(newContent, oldContent = {}) {
    if (newContent === oldContent) return;
    console.log('render Content');

    const titleDOM = document.getElementById('content');
    titleDOM.innerHTML = newContent.text;
    titleDOM.style.color = newContent.color;
}

function renderApp(newAppState, oldAppState = {}) {
    if (newAppState === oldAppState) return;
    console.log('render App');

    renderTitle(newAppState.title, oldAppState.title);
    renderContent(newAppState.content, oldAppState.content);
}


renderApp(store.getState());
store.dispatch({type: 'UPDART_TITLE_TEXT', text: '《React.js 小书》'});
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'});
