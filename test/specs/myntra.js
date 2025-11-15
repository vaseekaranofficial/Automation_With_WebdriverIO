const myntraShop = require('../pages/myntra.shop')
describe('Myntra shop flow',async()=>
{
    it('Myntra shop',async()=>
    {
        await browser.url("https://www.myntra.com/")
        await browser.maximizeWindow()
        await myntraShop.menColumn.click()
        await myntraShop.search("Shoe")
        await browser.pause(1500)
        await myntraShop.chooseCheap()
        await browser.pause(1500)
        await myntraShop.shoeOpenPrice.moveTo()
        await myntraShop.shoeOpenPrice.click()
        await browser.pause(1500)
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(1500)
        await myntraShop.chooseSize.moveTo()
        await myntraShop.chooseSize.click()
        await browser.pause(1500)
        await myntraShop.addToBag.moveTo()
        await myntraShop.addToBag.click()
        await browser.pause(1500)
        await myntraShop.chooseBag.moveTo()
        await myntraShop.chooseBag.click()
        await browser.saveScreenshot("AddToCartMyntra.png")
        await browser.pause(3000)
        await myntraShop.pinAddress.click()
        await browser.pause(3000)

    })
    
})