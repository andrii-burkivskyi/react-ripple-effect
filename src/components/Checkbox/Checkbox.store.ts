import { observable, action, set } from 'mobx';
interface InitProps {
    label: CheckboxStore["label"];
    name: CheckboxStore["name"];
    value: CheckboxStore["value"]
}

export class CheckboxStore {
    constructor(props: InitProps) {
        set(this, props);
    }

    @observable label: string = '' 
    @observable name: string = '';
    @observable value: boolean = false;

    @action onChange = () => {
        this.value = !this.value;
    }
}