class updateStatus {
    private id: number;
    private status: string;
    private role: string;

    constructor(id: number, status: string, role: string) {
        this.id = id
        this.status = status
        this.role = role
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getRole(): string {
        return this.role;
    }

    public setRole(role: string): void {
        this.role = role;
    }
}

export default updateStatus;