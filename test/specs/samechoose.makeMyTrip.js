describe('Choose the flight',async()=>
{
    it('Click out of login',async()=>
    {
        await browser.url("https://www.makemytrip.com/")
        await browser.maximizeWindow()
        await browser.pause(500)
        await $('//span[@class = "commonModal__close"]').click()
        await browser.pause(500)
        await $('//label[@for = "fromCity"]').click()
        await $("//input[@placeholder='From']").setValue("Chennai")
        await browser.pause(500)
        await $('//li [@id = "react-autowhatever-1-section-0-item-0"]').click()
        await $('//label[@for="toCity"]').click()
        await $("//input[@placeholder='To']").setValue("Singapore")
    
        await browser.pause(500)
        await $('//li[@id="react-autowhatever-1-section-0-item-0"]').click()
        await browser.pause(500)
        var months = await $("//div[@class='DayPicker-Caption']/div").getText()
        while(!months.includes("February"))
        {
            await browser.pause(500)
            console.log("Hello")
            await $("//span[@aria-label='Next Month']").click()
            months = await $("//div[@class='DayPicker-Caption']/div").getText()
            
        }
        
        await $("(//div[@class='dateInnerCell'])[11]").click()
        await browser.pause(500)
        await $('//p[@class="latoBlack font12 greyText lineHeight16"]').click()
        await browser.pause(500)
        while(!months.includes("March"))
        {
            await browser.pause(500)
            console.log("Hello")
            await $("//span[@aria-label='Next Month']").click()
            months = await $("//div[@class='DayPicker-Caption']/div").getText()
            
        }
        await $("(//div[@class='dateInnerCell'])[11]").click()
        await browser.pause(500)
        await browser.saveScreenshot("ChoosePage.png")
        await $('//a[@class="primaryBtn font24 latoBold widgetSearchBtn "]').click()
        await browser.pause(500)
        
    })
})