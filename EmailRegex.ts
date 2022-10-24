export class EmailRegex {
    static EMAIL_REGEX: RegExp = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;

    static validate(email: string): boolean {
        return this.EMAIL_REGEX.test(email);
    }
}