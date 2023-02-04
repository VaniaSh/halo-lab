export interface InputProps{
    placeholder: string;
    isButton?: boolean;
    height?: number
    name: string;
    readOnly?: boolean;
    onChange?: function;
    value?: any;
    disabled?: boolean;
    email?: boolean | false
}

