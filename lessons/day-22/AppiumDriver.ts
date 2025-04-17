export default abstract class AppiumDriver {
    abstract launchApp(): void;
    abstract closeApp(): void;
}