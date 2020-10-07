export class Product {
    constructor(
        public id?: string,
        public name?: string,
        public price?: number,
        public rating?: number,
        public description?: string,
        public code?: string,
        public quantity?: number,
        public inventoryStatus?: string,
        public category?: string,
        public image?: string
    ) { }
}
