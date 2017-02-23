import appStore from './appStore';
import { apiPostRequest, replacePage, replaceSidebar, replaceUser } from './actionCreators';

let instance = null;

class PageData {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.conversions = 0;

        return instance;
    }

    getPage(nextState, replace, callback) {
        if (!instance.conversions) {
            instance.addConversion();
            callback();
            return;
        }
        instance.addConversion();
        appStore.store.dispatch(apiPostRequest({url: nextState.location.pathname})).then((store) => {
            Object.keys(store).forEach((storeName) => {
                switch (storeName) {
                    case 'page':
                        appStore.store.dispatch(replacePage(store[storeName]));
                        break;
                    case 'sidebar':
                        appStore.store.dispatch(replaceSidebar(store[storeName]));
                        break;
                    case 'user':
                        appStore.store.dispatch(replaceUser(store[storeName]));
                        break;
                }
            });
            callback();
        });
    }

    addConversion() {
        this.conversions += 1;
    }
}

const pageApi = new PageData();

export default pageApi;
