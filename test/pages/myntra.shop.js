class myntraShop
{
    get menColumn()
    {
        return $('//a[@data-group="men"]')
    }
    get searchInput()
    {
        return $('//input[@class="desktop-searchBar"]')
    }
    get dropDown1()
    {
        return $('//li[@data-index="1"]')
    }
    get sortBy()
    {
        return $('//div[@class="sort-sortBy"]')

    }
    get lowToHigh()
    {
        return $('(//label[@class="sort-label "])[6]')
    }
    get shoeOpenPrice()
    {
        return $('(//div[@class="product-price"])[1]')
    }
    get chooseSize()
    {
        return $('(//p[@class="size-buttons-unified-size"])[1]')
    }
    get addToBag()
    {
        return $('//span[@class="myntraweb-sprite pdp-whiteBag sprites-whiteBag pdp-flex pdp-center"]')
    }
    get chooseBag()
    {
        return $('//span[@class="myntraweb-sprite desktop-iconBag sprites-headerBag"]')
    }
    get pinAddress()
    {
        return $('//div[@class="addressStripV2-base-changeBtn addressStripV2-base-changeBtnDesktop "]')
    }
    get enterPin()
    {
        return $('//input[@placeholder="Enter Pincode"]')
    }
    get pressCheck()
    {
        return $('//div[@class="CheckDeliveryModalV2-base-checkBtn CheckDeliveryModalV2-base-valid"]')
    }
    get placeOrder()
    {
        return $('(//button[@role="button"])[2]')
    }
    async search(thing)
    {
        await this.searchInput.setValue(thing)
        await browser.saveScreenshot("SeachMyntra.png")
        await this.dropDown1.click()
    }
    async chooseCheap()
    {
      await this.sortBy.moveTo()
      
      await this.lowToHigh.click()
    }
}
module.exports = new myntraShop()