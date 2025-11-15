class loginPage{
    get loginClose()
    {
        return $('//span[@class = "commonModal__close"]')
    }
    async close()
    {
        await this.loginClose.click()
    }
    
}
module.exports = new loginPage()