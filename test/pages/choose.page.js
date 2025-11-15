class chooseLocations{
    get displayedToWork()
    {
        return $('//div[@class="fareCardItemContainer    showCoachMark"]')
    }
    get ChooseFlights()
    {
        return $("//div[@class='flt_fsw_inputBox searchCity inactiveWidget ']")
    }
    get fromCityChoose()
    {
        return $('//label[@for = "fromCity"]')
    }
    get fromCityInput()
    {
        return $("//input[@placeholder='From']")
    }
    get toCityChoose()
    {
        return $('//label[@for="toCity"]')
    }
    get toCityInput()
    {
        return $("//input[@placeholder='To']")
    }
    get fromCityText()
    {
        return $('//input[@id="fromCity"]')
    }
    get toCityText()
    {
        return $('//input[@id="toCity"]')
    }
    get sameCityError()
    {
        return $('//span[@class="redText fltErrorMsgText"]')
    }
    get chooseDropDown1()
    {
        return $('//li [@id = "react-autowhatever-1-section-0-item-0"]')
    }
    get checkLeftMonth()
    {
        return $("//div[@class='DayPicker-Caption']/div")
    }
    get nextMonthArrow()
    {
        return $("//span[@aria-label='Next Month']")
    }
     get clickReturnDate()
    {
        return $('//p[@class="latoBlack font12 greyText lineHeight16"]')
    }
    get date11()
    {
        return $("(//div[@class='dateInnerCell'])[15]")
    }
    get travellerClick()
    {
        return $('//label[@for="travellers"]')
        
    }
    get travellerApply()
    {
        return $('//button[@class="primaryBtn btnApply pushRight"]')
    }
    get searchClick()
    {
        return $('//a[@class="primaryBtn font24 latoBold widgetSearchBtn "]')
    }

    
    async fromCityForm(fromCity)
    {
       await this.fromCityChoose.click()
       
       for(const c of fromCity)
       {
        await this.fromCityInput.addValue(c)
        await browser.pause(this.delay())
       }
       await browser.pause(this.delay())
       await this.chooseDropDown1.click()
       
    }
    async toCityForm(toCity)
    {
        
        await this.toCityChoose.click()
        for(const c of toCity)
       {
        await this.toCityInput.addValue(c)
        await browser.pause(this.delay())
       }
        await browser.pause(this.delay())
        await this.chooseDropDown1.click()
    }
    async chooseCorrectMonth(chooseMonth)
    {
        var months = await checkLeftMonth.getText()
       
        while(!months.includes(chooseMonth))
        {
            await browser.pause(this.delay())
            await nextMonthArrow.click()
            months = await checkLeftMonth.getText()
            
        }
    }
    async checkSameCity(toCity)
    {
       var fromCityText = await this.fromCityText.getAttribute('readonly value')
       var toCityText = await this.toCityText.getAttribute('readonly value')
       if(fromCityText==toCityText)
       {
        console.log("Please change the city")
        console.log(await this.sameCityError.getText())
        await this.toCityChoose.click()
        for(const c of toCity)
       {
        await this.toCityInput.addValue(c)
        await browser.pause(this.delay())
       }
        await browser.pause(this.delay())
        await this.chooseDropDown1.click()
       }
    }
    async travellerForm()
    {
        await this.travellerClick.click()
        await browser.pause(this.delay())
        await this.travellerApply.click()
    }
    delay(min = 500, max = 800) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
module.exports = new chooseLocations()