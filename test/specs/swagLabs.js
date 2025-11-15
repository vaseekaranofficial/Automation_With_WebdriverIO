  describe("Login Testing application", async () => {
    let usernames1=[];
    let password1;

    it("1. Get the texts", async () => {
      await browser.url("https://www.saucedemo.com/");
      var usernames = await $("#login_credentials").getText();
      var password = await $(".login_password").getText();
      console.log(usernames);
      usernames1 = usernames.split("\n").slice(1);
      password1 = password.split("\n")[1];
    })

    usernames1.forEach((user)=>{
      it("2. Login sucess page", async() => {
        await browser.url("https://www.saucedemo.com/");
        await $("#user-name").setValue(user);
        await $("#password").setValue(password1);
        await $("#login-button").click();
        await browser.waitUntil(
          async () => await $("#inventory_container").isDisplayed(),
          {
            timeout: 5000,
            timeoutMsg: "Home page is not opening we need to check"
          }
        );
        const dashboard = $("#inventory_container");
        const dashboard1 = await dashboard.isDisplayed();
        if (dashboard1) {
          console.log("Logged in succesfully");

          await $("#add-to-cart-sauce-labs-backpack").click();

          await $(".shopping_cart_link").click();
          await browser.waitUntil(
            async () => await $(".cart_list").isDisplayed(),
            {
              timeout: 5000,
              timeoutMsg: "Cart page is not opening we need to check",
            }
          );
          const cartpage = await $(".cart_list");
          const cartpage1 = await cartpage.isDisplayed();
          if (cartpage1) {
            console.log("Gone to cart page");

            await $("#checkout").click();

            await $("#first-name").setValue("Vaseekaran");

            await $("#last-name").setValue("Mdhgghu");
            await $("#postal-code").setValue("625003");
            await $("#continue").click();
            await browser.waitUntil(
              async () => await $(".cart_list").isDisplayed(),
              {
                timeout: 5000,
                timeoutMsg: "Cart list is not opening",
              }
            );
            const resultpage = await $(".cart_list");
            const resultpage1 = await resultpage.isDisplayed();
            if (resultpage1) {
              var cost = await $(".summary_total_label").getText();
              console.log(cost);
              await $("#finish").click();
              await browser.waitUntil(
                async () => await $("#checkout_complete_container").isDisplayed(),
                {
                  timeout: 5000,
                  timeoutMsg: "Finish page is not coming",
                }
              );
              const thankyou = await $("#checkout_complete_container");
              const thankyou1 = await thankyou.isDisplayed();
              if (thankyou1) {
                await $("#back-to-products").click();
              }
            }
          }
          await $("#react-burger-menu-btn").click();
          await browser.waitUntil(
            async () => await $("#logout_sidebar_link").isDisplayed(),
            {
              timeout: 5000,
              timeoutMsg: "Finish page is not coming",
            }
          );
          await $("#logout_sidebar_link").click();
        } else {
          console.log("Wrong username or password");
        }
      });
  });
  });
