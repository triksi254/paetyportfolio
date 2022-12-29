import { TOTAL_SCREENS } from "./commonUtis";
import { Subject } from "rxjs";
import { object } from "prop-types";
export default class ScrollService {
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor() {
        window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("ContactMe");
        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({ behavior: "smooth" });
    };
    scrollToHome = () => {
        let homeScreen = document.getElementById("Home");
        if (!homeScreen) return;
        homeScreen.scrollIntoView({ behavior: "smooth" });
    };
    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;

        let partiallyVisible =
            elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible =
            elementTop >= 0 && elementBottom <= window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisible;

            case "complete":
                return completelyVisible;
            default:
                return false;
        }
    };

    checkCurrentScreenUnderViewport = (event) => {
        if (!event || object.keys(event).length < 1) return;
        for (let screen of TOTAL_SCREENS) {
            let screenFromDom = document.getElementById(screen.screen_name);
            if (!screenFromDom) continue;

            let fullyVisible = this.isElementInView(screenFromDom, "complete");
            let partiallyVisible = this.isElementInView(screenFromDom, "partial");

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered) {
                    ScrollService.cureentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name,
                    });
                    screen["alreadyRendered"] = true;
                    break;
                }
                if (fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }
        }
    };
}