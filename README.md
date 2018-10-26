# Cookie Clicker bot

Tired of manually doing things in this game? 
[http://orteil.dashnet.org/cookieclicker/](http://orteil.dashnet.org/cookieclicker/)
You can use this clever script to do all the work for you.

### What the script does?

- clicks the cookie constantly
- automaticaly buys best available products
- automaticaly buys best available upgrade
- clicks the Golden Cookie when it appears

## How to use

First of all, open the website site with the game .

Then select the code below and drag and drop this to you bookmarks bar in the browser.

```js
javascript:(function()%7B(()%20%3D%3E%20%7Bclass%20ClickerBot%20%7Bconstructor()%20%7Bthis.cookieToClick%20%3D%20document.getElementById(%22bigCookie%22)%3Bthis.products%20%3D%20document.getElementById(%22products%22).children%3Bthis.upgrades%20%3D%20document.getElementById(%22upgrades%22).children%3B%7Dstart()%20%7Bthis.log(%22Clicker%20has%20started!%22)%3Bthis.startClicking(1)%3Bthis.startBuying(100000)%3B%7Dstop()%20%7BclearTimeout(this.clicking)%3BclearTimeout(this.buying)%3Bthis.log(%22Clicker%20has%20stopped!%22)%3B%7DstartClicking(miliseconds)%20%7Bthis.cookieToClick%3Bthis.clicking%20%3D%20setTimeout(()%20%3D%3E%20%7Bthis.cookieToClick.click()%3Blet%20goldenCookie%20%3D%20this.findGoldenCookie()%3Bif%20(goldenCookie)%20%7BgoldenCookie.click()%3Bthis.log(%22I've%20clicked%20the%20golden%20cookie!%22)%3B%7Dthis.startClicking(miliseconds)%3B%7D%2C%20miliseconds)%3B%7DstartBuying(miliseconds)%20%7Bthis.buying%20%3D%20setTimeout(()%20%3D%3E%20%7Bthis.buyProduct()%3Bthis.buyUpgrade()%3Bthis.startBuying(miliseconds)%3B%7D%2C%20miliseconds)%3B%7DbuyProduct()%20%7Bconst%20productIsAvailable%20%3D%20this.getBestProduct(this.products)%3Bif%20(productIsAvailable)%20%7Bconst%20message%20%3D%20%22I've%20bought%20the%20%22%20%2B%20productIsAvailable.innerText%20%2B%20%22%20product.%22%3BproductIsAvailable.click()%3Bthis.log(message)%3B%7D%7DbuyUpgrade()%20%7Bconst%20upgradeIsAvailable%20%3D%20this.getBestUpgrade(this.upgrades)%3Bif%20(upgradeIsAvailable)%20%7Bconst%20message%20%3D%20%22I've%20bought%20the%20%22%20%2B%20upgradeIsAvailable.innerText%20%2B%20%22%20upgrade.%22%3BupgradeIsAvailable.click()%3Bthis.log(message)%3B%7D%7DgetBestProduct(productsTable)%20%7Bif%20(productsTable%20%26%26%20productsTable.length%20%3E%200)%20%7Blet%20i%3Bfor%20(i%20%3D%20productsTable.length%20-%201%3B%20i%20!%3D%200%3B%20i--)%20%7Bconst%20element%20%3D%20productsTable%5Bi%5D%3Bif%20(this.elementIsEnabled(element))%20%7Breturn%20element%3B%7D%7D%7D%7DgetBestUpgrade(upgradesTable)%20%7Bif%20(upgradesTable%20%26%26%20upgradesTable.length%20%3E%200)%20%7Blet%20i%3Bfor%20(i%20%3D%200%3B%20i%20%3C%20upgradesTable.length%20-%201%3B%20i%2B%2B)%20%7Bconst%20element%20%3D%20upgradesTable%5Bi%5D%3Bif%20(this.elementIsEnabled(element))%20%7Breturn%20element%3B%7D%7D%7D%7DelementIsEnabled(element)%20%7Breturn%20element.className.includes(%22enabled%22)%3B%7DgetTime()%20%7Blet%20currentDate%20%3D%20new%20Date()%3Breturn%20currentDate.getHours()%20%2B%20%22%3A%22%20%2B%20currentDate.getMinutes()%3B%7DfindGoldenCookie()%20%7Bconst%20shimmer%20%3D%20this.getShimmerElement()%3Bif%20(shimmer.length%20%3E%200)%20%7Breturn%20shimmer%5B0%5D%3B%7Dreturn%20false%3B%7DgetShimmerElement()%20%7Breturn%20document.getElementsByClassName(%22shimmer%22)%3B%7Dlog(message)%20%7Bconsole.log(this.getTime()%20%2B%20%22%3A%20%22%20%2B%20message)%3B%7D%7Dconst%20clicker%20%3D%20new%20ClickerBot()%3Bclicker.start()%3B%7D)()%7D)()
```

Click the appropriate bookmark.

Watch the magic happens!.

License
----

MIT
