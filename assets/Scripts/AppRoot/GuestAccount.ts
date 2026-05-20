import { sys } from "cc";

export class GuestAccount {
    private static STORAGE_KEY = "guest-account";
    private static USERNAME_PREFIX = "Guest_";
    private username: string | null = null;

    public init(): void {
        const cached = sys.localStorage.getItem(GuestAccount.STORAGE_KEY);
        if (cached) {
            this.username = cached;
        } else {
            this.username = this.generateUsername();
            sys.localStorage.setItem(GuestAccount.STORAGE_KEY, this.username);
        }
    }

    public get Username(): string {
        return this.username;
    }

    private generateUsername(): string {
        return GuestAccount.USERNAME_PREFIX + this.randomId(8);
    }

    private randomId(length: number): string {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
}
