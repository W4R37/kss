import { observable, action, makeObservable } from 'mobx';
import { submit } from '../endpoints/index';

class Products {
    loading=false;
    products=[];
    cart=[];
    constructor() {
        makeObservable(this, {
            loading: observable,
            products: observable,
            cart: observable,
            submit: action
        })
    }

    submit(data) {
        this.loading = true;
        console.log('here');
        submit(data)
        .then(() => alert('Mail sent'))
        .catch((e) => console.error(e))
        .finally(() => {
            this.loading = false;
        })
    }
}

export default new Products();