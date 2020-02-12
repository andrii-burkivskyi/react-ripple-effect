import { observable, action, set } from 'mobx';
interface InitProps {
    label: InputStore["label"];
    name: InputStore["name"];
    value: InputStore["value"]
}

export class InputStore {
    constructor(props: InitProps) {
        set(this, props);
    }

    @observable label: string = '' 
    @observable name: string = '';
    @observable value: string = '';

    @action onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.value = event.currentTarget.value;
    }
}