import AppiumDriver from "./AppiumDriver";
import AndroidDriver from "./AndroidDriver";
import IOSDriver from "./IOSDriver";

export default class DriverManager {

    static getAppiumDriver(platform: string): AppiumDriver {
        switch (platform) {
            case "android":
                return new AndroidDriver();
            case "ios":
                return new IOSDriver();
            default:
                throw new Error("Invalid platform");
        }
    }
}

/**
 * 
 * ChromeDriver driver = new ChromeDriver();
 * Webdriver driver = new ChromeDriver();
 */
