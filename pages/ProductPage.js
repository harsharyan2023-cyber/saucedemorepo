export default class ProductPage {
    constructor(page){
        this.page=page;
        this.pageTitle=page.getByText('Products',{exact:true});
        this.inventoryItems=page.locator('.inventory_item_name ');
        this.productNames=page.locator('.inventory_item_name ');
        this.productPrice=page.locator('.')


    }
    async verifyproductPage(){
        await this.pageTitle.waitFor();
    }
    async getProductCount(){
        return await this.inventoryItems.count();
    }
    async getProductnames(){
        return await this.productNames.allTextContents();
    }

}