javascript: (() => {
    class ClickerBot {
        constructor() {
            this.cookieToClick = document.getElementById("bigCookie");
            this.products = document.getElementById("products").children;
            this.upgrades = document.getElementById("upgrades").children;
        }
        start() {
            this.log("Clicker has started!");
            this.startClicking(1);
            this.startBuying(100000);
        }
        stop() {
            clearTimeout(this.clicking);
            clearTimeout(this.buying);
            this.log("Clicker has stopped!");
        }
        startClicking(miliseconds) {
            this.cookieToClick;
            this.clicking = setTimeout(() => {
                this.cookieToClick.click();
                let goldenCookie = this.findGoldenCookie();
                if (goldenCookie) {
                    goldenCookie.click();
                    this.log("I've clicked the golden cookie!");
                }
                this.startClicking(miliseconds);
            }, miliseconds);
        }
        startBuying(miliseconds) {
            this.buying = setTimeout(() => {
                this.buyProduct();
                this.buyUpgrade();
                this.startBuying(miliseconds);
            }, miliseconds);
        }
        buyProduct() {
            const productIsAvailable = this.getBestProduct(this.products);
            if (productIsAvailable) {
                const message = "I've bought the " + productIsAvailable.innerText + " product.";
                productIsAvailable.click();
                this.log(message);
            }
        }
        buyUpgrade() {
            const upgradeIsAvailable = this.getBestUpgrade(this.upgrades);
            if (upgradeIsAvailable) {
                const message = "I've bought the " + upgradeIsAvailable.innerText + " upgrade.";
                upgradeIsAvailable.click();
                this.log(message);
            }
        }
        getBestProduct(productsTable) {
            if (productsTable && productsTable.length > 0) {
                let i;
                for (i = productsTable.length - 1; i != 0; i--) {
                    const element = productsTable[i];
                    if (this.elementIsEnabled(element)) {
                        return element;
                    }
                }
            }
        }
        getBestUpgrade(upgradesTable) {
            if (upgradesTable && upgradesTable.length > 0) {
                let i;
                for (i = 0; i < upgradesTable.length - 1; i++) {
                    const element = upgradesTable[i];
                    if (this.elementIsEnabled(element)) {
                        return element;
                    }
                }
            }
        }
        elementIsEnabled(element) {
            return element.className.includes("enabled");
        }
        getTime() {
            let currentDate = new Date();
            return currentDate.getHours() + ":" + currentDate.getMinutes();
        }
        findGoldenCookie() {
            const shimmer = this.getShimmerElement();
            if (shimmer.length > 0) {
                return shimmer[0];
            }
            return false;
        }
        getShimmerElement() {
            return document.getElementsByClassName("shimmer");
        }
        log(message) {
            console.log(this.getTime() + ": " + message);
        }
    }
    const clicker = new ClickerBot();
	clicker.start();
})();
//# sourceMappingURL=ClickerBot.js.map