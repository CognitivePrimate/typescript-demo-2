export class Phone {
    number: string;
    isOn: boolean;

    constructor(number: string){
        this.number = number;
        this.isOn = false;
    }

    // methods
    togglePower(): void {
        this.isOn = !this.isOn;
    }

    makeCall(person: string): string {
        return `Hello, ${person}, how are you?`;
    }
}