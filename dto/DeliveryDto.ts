class Delivery {

    private idProduct: number;
    private email: string;
    private status: string;
    private adress: string;

    constructor(
        idProduct: number,
        email: string,
        status: string,
        adress: string
    ) {
        this.idProduct = idProduct
        this.email = email
        this.status = status
        this.adress = adress
    }


    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }



    public getAdress(): string {
        return this.adress;
    }

    public setAdress(adress: string): void {
        this.adress = adress;
    }

    public getIdProduct(): number {
        return this.idProduct;
    }

    public setIdProduct(idProduct: number): void {
        this.idProduct = idProduct;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }




}

export default Delivery;