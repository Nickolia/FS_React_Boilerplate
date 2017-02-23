class Sidebar {
    constructor(userData) {
        this.user = userData;
    }

    getLinks() {
        if (!this.user || !this.user.id) {
            return [{
                to: 'options',
                name: 'Options',
            }, {
                to: '/',
                name: 'Main',
            }];
        }

        return [];
    }

    getData() {
        return {
            isExist: !!this.user && this.user.id,
            links: this.getLinks(),
        };
    }
}

export default Sidebar;
