import {Phone} from "./phone";

export class FlipPhone extends Phone {
    isOpen: boolean;

    constructor(number: string){
        super(number);
        this.isOpen = false;
    }

    toggleOpen(): void {
        this.isOpen = !this.isOpen;
    }

    makeCall(person: string): string {
        if (this.isOpen){
            return `Hello, ${person}, how are you?`;
        }else {
            return "Please open your phone";
        }
    }
}