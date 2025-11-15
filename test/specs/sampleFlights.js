describe('Lets automate flights page',async()=>
{
    it('Choosing ticket',async()=>
    {
        await browser.url("https://www.makemytrip.com/flight/search?itinerary=MAA-SIN-11/02/2026_SIN-MAA-11/03/2026&tripType=R&paxType=A-1_C-0_I-0&intl=true&cabinClass=E&lang=eng")
        await browser.pause(10000)
    })
})