const loginPage = require('../pages/login.page')
const choosePage = require('../pages/choose.page')
describe('Choose the flight',async()=>
{
    it('Click out of login',async()=>
    {
       
        await browser.url("https://www.makemytrip.com/")
        await browser.maximizeWindow()
        await browser.pause(choosePage.delay())
        await loginPage.close()
        await browser.pause(choosePage.delay())
        if(await choosePage.displayedToWork.isDisplayed())
        {
        await choosePage.ChooseFlights.click()
        }
        await browser.pause(choosePage.delay())
        await choosePage.fromCityForm("Goa")
        await choosePage.toCityForm("Goa")
        await choosePage.checkSameCity("Pune")
        await browser.pause(choosePage.delay())
        var months = await choosePage.checkLeftMonth.getText()
       
        while(!months.includes("February"))
        {
            await browser.pause(choosePage.delay())
            await choosePage.nextMonthArrow.click()
            months = await choosePage.checkLeftMonth.getText()
            
        }
        await choosePage.date11.click()
        await browser.pause(choosePage.delay())
        await choosePage.clickReturnDate.click()
        await browser.pause(choosePage.delay())
        var months = await choosePage.checkLeftMonth.getText()
        while(!months.includes("March"))
        {
            await browser.pause(choosePage.delay())
            await choosePage.nextMonthArrow.click()
            months = await choosePage.checkLeftMonth.getText()
            
        }
        await choosePage.date11.click()
        await browser.pause(choosePage.delay())
        await choosePage.travellerForm()
        await browser.saveScreenshot("ChoosePage.png")
        await choosePage.searchClick.click()
        await browser.pause(choosePage.delay())
        await browser.saveScreenshot("NotGoingPage.png")
        
        
    })
})