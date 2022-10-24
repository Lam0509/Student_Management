export class PhoneRegex {
    static PHONE_REGEX: RegExp = /^(\+84|0)[35789]\d{8}$/;

    static validate(phone: string): boolean {
        return this.PHONE_REGEX.test(phone);
    }
}
