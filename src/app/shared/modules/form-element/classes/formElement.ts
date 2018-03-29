export class FormElement {
    label?: string = "";
    class?: string[] = ['col-md-4', 'col-md-8', 'col-md-12'];
    propName?: string = "";
    error?: string = "";
    hidden?: boolean = false;
    name?: string = "";
    type?: number;
}

export class FormText extends FormElement {
    palaceholder?: string = "";
    maxLength?: number;
    minLength?: number;
    type = FormElementType.TEXT;
    constructor(obj) {
        super();
        var self = this;
        self = Object.assign(this, obj);
    }
}

export class FormTitle extends FormElement {
    type = FormElementType.TITLE;
    constructor(obj) {
        super();
        var self = this;
        self = Object.assign(this, obj);
    }
}

export class FormTextarea extends FormElement {
    palaceholder?: string = "";
    type = FormElementType.TEXTAREA;
    constructor(obj) {
        super();
        var self = this;
        self = Object.assign(this, obj);
    }
}

export class FormButton extends FormElement {
    type = FormElementType.BUTTON;
    constructor(obj) {
        super();
        var self = this;
        self = Object.assign(this, obj);
    }
}

export class FormCustomElement extends FormElement {
    type = FormElementType.CUSTOME;
    ngTempateName?:string = "";
    constructor(obj) {
        super();
        var self = this;
        self = Object.assign(this, obj);
    }
}

export enum FormElementType {
    CUSTOME = 0,
    TEXT = 1,
    SWITCHER = 2,
    DROPDOWN = 3,
    TEXTAREA = 4,
    NUMBER = 5,
    TITLE = 6,
    BUTTON =7,
    SEARCH_TEXT = 8
}