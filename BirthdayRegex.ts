export class BirthdayRegex {
    static BIRTHDAY_REGEX: RegExp = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[012])\/\d{4}$/;

    static validate(birthday: string): boolean {
        return this.BIRTHDAY_REGEX.test(birthday);
    }
}